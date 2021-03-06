const knex = require('../../../db')

function getPastStaff(shopId) {
  return knex('staff').where({shops_id: shopId}).then(staff => {
    const promises = staff.map(employee => {
      return knex('purchases')
      .innerJoin('purchases_statuses', 'purchases_statuses.purchase_id', 'purchases.id')
      .where({'purchases_statuses.staff_id': employee.id})
      .whereNot({'purchases_statuses.completed': false})
      .select('purchases.id as id', 'purchase_date', 'receipt_id', 'status_id', 'created_at', 'updated_at', 'purchases_statuses.staff_id').then(status => {
        employee.completed = status
        return employee
      })
    })
    return Promise.all(promises)
  })
}

function getCurrentStaff(shopId) {
  return knex('staff').where({shops_id: shopId}).then(staff => {
    const promises = staff.map(employee => {
      return knex('purchases')
      .where({'purchases.staff_id': employee.id})
      .then(purchase => {
        employee.inProduction = purchase
        return employee
      })
    })
    return Promise.all(promises)
  })
}

function totalStaff(shopId) {
  return knex('staff').where({shops_id: shopId}).then(staff => {
    staff[1]
    return staff.length
  })
}

function currentWorkingStaff(shopId) {
  return getCurrentStaff(shopId)
  .then(staff => {
    return staff.map(staff => staff.inProduction).reduce((acc, ele) => [
      ...acc,
      ...ele
    ]).reduce((acc, ele) => {
      if (ele !== undefined && acc.hasOwnProperty(ele.staff_id)) {
        acc[ele.staff_id].productionCount += 1
      } else if (ele !== undefined) {
        acc[ele.staff_id] = ele
        acc[ele.staff_id].productionCount = 1
      }
      return acc
    }, {})
  }).then(production => {
    let productionTotal = Object.entries(production)
    return productionTotal.length
  })
}

module.exports = {
  getCurrentStaff,
  getPastStaff,
  totalStaff,
  currentWorkingStaff
}
