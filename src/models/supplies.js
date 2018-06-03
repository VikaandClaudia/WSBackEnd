const supplies = require('../models/supplies')


function getOneSupply(suppliesId){
  return (knex('supplies')
  .where({id: suppliesId})
  .first())
}

function getAllSupplies(shopId){
  return (
    knex('suppliess')
  .where({shop_id: shopId})
  )
}

function createSupplies(body, shopId){
  let stock = body.stock || 0
  let source = body.source_id || null
  let kind = body.kind_id || null
    return (
      knex('supplies')
    .insert({name: body.name, stock_qty: stock, stock_qty_measure_type: body.measure_type, shop_id: shopId,  source_id: source, kind_id: kind})
    .returning('*')
  )
}

function removeSupplies(suppliesId){
  return (knex('supplies')
  .where({id: suppliesId})
  .del())
}

function updateSupplies(){

}

module.exports = {
  getOneSupply,
  getAllSupplies,
  createSupplies,
  removeSupplies,
  updateSupplies
}
