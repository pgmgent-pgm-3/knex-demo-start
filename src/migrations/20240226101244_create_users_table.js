const tableName = "users";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.text("bio").nullable();
    table.timestamps(true, true); // Adds created_at and updated_at
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
