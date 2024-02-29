const tableName = "pages";

export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
        // id, title, slug, content, is_homepage (boolean)
        table.increments("id").primary();
        table.string("title").notNullable();
        table.string("slug").notNullable();
        table.text("content").notNullable();
        table.boolean("is_homepage").defaultTo(false);
    });
}

export function down(knex) {
    return knex.schema.dropTable(tableName);
}
