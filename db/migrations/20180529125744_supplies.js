exports.up = function(knex, Promise) {
  return knex.schema.createTable('supplies', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('stock_qty').defaultsTo('0');
    table.string('stock_qty_measure');
    table.integer('source_id').references('sources.id');
    table.integer('kind_id').references('kinds.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('supplies')
};
