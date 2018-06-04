const knex = require('../../db');
const bcrypt = require('bcrypt-as-promised')

function getShopByName(shopName) {
  return (
    knex('shops')
  .where({shop_name: shopName})
  .first())
}

function getOneShop(shopsId) {
  return (
    knex('shops')
    .where({id: shopsId})
    .first())
}

function getAllShops(){
  return (
    knex('shops')
  )
}

function createShop(body) {
  let shopName = body.shop_name
  return getShopByName(shopName)
  .then(data => {
    if (data)
      throw {
        status : 400,
        message: 'Shop exists'
      }
    return (
      knex('shops')
      .insert({shop_name: shopName})
      .returning('*'))
  })
}

function updateShop(shopId, shop_name, logo, settings) {
  console.log(shopId, shop_name, logo, settings)
  return (
    knex('shops')
    .update({shop_name, settings, logo})
    .where({id: shopId})
    .returning('*'))
}

function removeShop(shopId) {
  return (
    knex('items_supplies')
  .innerJoin('items', 'items.id', 'items_supplies.item_id')
  .where({shop_id: shopId})
  .del())
  .then(data => {
    return (knex('items').where({shop_id: shopId}).del())
  }).then(data => {
    return (knex('items').innerJoin('categories', 'items.category_id', 'categories.id').where({shop_id: shopId}).del())
  }).then(data => {
    return (knex('categories').where({shop_id: shopId}).del())
  }).then(data => {
    return (knex('staff').where({shops_id: shopId}).del())
  }).then(data => {
    return (knex('shops').where({id: shopId}).del())
  })
}

//Staff Routing//
function getOneStaff(staffId, shopId) {
  return (knex('staff').where({id: staffId, shops_id: shopId}).first())
}

function getStaffByEmail(staffEmail) {
  return (
    knex('staff')
  .where({email: staffEmail})
  .innerJoin('shops', 'staff.shops_id', 'shops.id')
  .first())
}

function getAllStaff(shopId) {
  return (knex('staff')
  .where({shops_id: shopId})
)
}

function createStaff(body, ShopId) {
  let password = body.password
  let first_name = body.fname
  let last_name = body.lname
  let staffEmail = body.email
  let photo_url = body.photo
  let shopId = ShopId
  let role = body.role || 1
  return getStaffByEmail(staffEmail).then(data => {
    if (data)
      throw {
        status : 400,
        message: 'Staff member already exists'
      }
    return bcrypt.hash(password, 10)
  }).then(newPassword => {
    return (knex('staff').insert({
      shops_id: shopId,
      role_id: role,
      first_name: first_name,
      last_name: last_name,
      email: staffEmail,
      password: newPassword,
      photo: photo_url
    }).returning('*'))
  }).then(function([
    {
      password,
      ...data
    }
  ]) {
    return data
  })
}

function updateStaff(staffId, first_name, last_name, unhashed_password, email, photo, role) {
  const toUpdate = {}
  if(first_name){
    toUpdate.first_name = first_name
  }
  if(last_name){
    toUpdate.last_name = last_name
  }
  if(email){
    toUpdate.email = email
  }
  if(photo){
    toUpdate.photo = photo
  }
  if(role){
    toUpdate.role = role
  }
  return bcrypt.hash(unhashed_password, 10).then(password => {
    return (knex('staff')
    .update(toUpdate)
    .where({id: staffId})
    .returning('*'))
  }).then(function([
    {password,...data}
  ]) {return data})
}

function removeStaff(staffId) {
  return (
    knex('staff')
    .where({id: staffId})
    .del())
}

module.exports = {
  getAllShops,
  getOneShop,
  createShop,
  removeShop,
  updateShop,
  getOneStaff,
  getStaffByEmail,
  getAllStaff,
  createStaff,
  updateStaff,
  removeStaff
}
