const tableName = "navigation_items";

export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments("id").primary();
        // label, url, target
        table.string("label").notNullable();
        table.string("url").notNullable();
        table.string("target").defaultTo("_self");
    });
}

export function down(knex) {
    return knex.schema.dropTable(tableName);
}
