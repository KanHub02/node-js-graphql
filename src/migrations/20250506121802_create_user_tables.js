/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('full_name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.integer('is_active').defaultTo(1).checkPositive();
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users'); // Первая миграция, поэтому удаляем таблицу
};
