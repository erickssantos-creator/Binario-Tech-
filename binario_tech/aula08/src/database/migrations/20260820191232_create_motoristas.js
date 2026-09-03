/**
 * @param { import("knex").Knex } knex
 * @returns { Promise }
 */
exports.up = async function(knex) {
  return knex.schema.createTable('motoristas', function(table) {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('cnh').notNullable().unique();
    table.string('categoria').notNullable();
    table.timestamp('criado_em').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise }
 */
exports.down = async function(knex) {
  // dropTableIfExists evita o erro SQLITE_ERROR caso a tabela não exista
  return knex.schema.dropTableIfExists('motoristas');
};
