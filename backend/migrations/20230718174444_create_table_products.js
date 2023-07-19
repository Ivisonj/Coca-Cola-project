/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary
        table.string('name').notNullable()
        table.integer('price').notNullable()
        table.string('imageUrl', 2000).notNullable()
        table.integer('companyId').references('id')
            .inTable('company').notNullable()
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('products')
}
