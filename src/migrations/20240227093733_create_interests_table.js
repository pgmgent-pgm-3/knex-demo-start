/**
 * live code pullen en eigen code wissen
 * 
 * git fetch origin
 * git reset --hard origin/final-2324
 * git clean -f
 */

const tableName = "interests";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
