const tableName = "interests";

export function up(knex) {
  return knex.schema.table(tableName, (table) => {
    table.integer("priority").defaultTo(0).after("id");
  });
}

export function down(knex) {
  return knex.schema.table(tableName, (table) => {
    table.dropColumn("priority");
  });
}
