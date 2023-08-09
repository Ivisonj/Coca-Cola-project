/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', table => {
        table.increments('id').primary()
        table.string('productName').notNullable()
        table.float('price').notNullable()
        table.integer('amount').notNullable()
        table.integer('companyId').references('id')
            .inTable('companies').notNullable()
        table.integer('userId').references('id')
            .inTable('users').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('orders')
};
