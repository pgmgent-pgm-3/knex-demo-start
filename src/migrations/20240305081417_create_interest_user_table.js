const tableName = "interest_user";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.integer("interest_id").unsigned().notNullable();
    table.foreign("interest_id").references("interests.id");

    table.integer("user_id").unsigned().notNullable();
    table.foreign("user_id").references("users.id");
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
