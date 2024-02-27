const tableName = "interests";

export function up(knex) {
  return knex.schema.table(tableName, (table) => {
    table.integer("priority").defaultTo(0).after("id"); // after only works with MySQL (not SQLite)
  });
}

export function down(knex) {
  return knex.schema.table(tableName, (table) => {
    table.dropColumn("priority");
  });
}
