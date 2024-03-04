const tableName = "user_meta";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("id").inTable("users");
    table.string("quote", 255).notNullable();
    table.string("location", 50).notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
