const tableName = "users";

export function up(knex) {
  return knex.schema.table(tableName, function (table) {
    table.integer("age").notNullable().defaultTo(18);
  });
}

export function down(knex) {
  return knex.schema.table(tableName, function (table) {
    table.dropColumn("age");
  });
}
