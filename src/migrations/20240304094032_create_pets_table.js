const tableName = "pets";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.increments("id").primary();

    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("users.id");
    table.string("name").notNullable();

    table.string("species").notNullable();
    table.integer("age").defaultTo(0);
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
