const tableName = "interests";

export function up(knex) {
  return knex.schema.table(tableName, function (table) {
    // add priority column
    table.integer("priority").defaultTo(1);
  });
}

export function down(knex) {
  return knex.schema.table(tableName, function (table) {
    // remove priority column
    table.dropColumn("priority");
  });
}
