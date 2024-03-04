const tableName = "preferences";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("users.id");
    table.string("theme").notNullable().defaultTo("light");
    table.string("language").notNullable().defaultTo("en");
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
