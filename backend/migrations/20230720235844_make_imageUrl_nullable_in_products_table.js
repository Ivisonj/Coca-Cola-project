/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('products', table => {
      table.dropColumn('imageUrl')
    })
    .then(() => {
      return knex.schema.alterTable('products', table => {
        table.string('imageUrl', 2000).nullable().after('companyId')
      })
    })
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.alterTable('products', table => {
      table.dropColumn('imageUrl')
    })
    .then(() => {
      return knex.schema.alterTable('products', table => {
        table.string('imageUrl', 2000).notNullable().after('companyId')
      })
    })
  }
  