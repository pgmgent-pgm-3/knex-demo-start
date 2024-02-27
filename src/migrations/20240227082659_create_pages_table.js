const tableName = "pages";

export function up(knex) {
  return knex.schema.createTable(tableName, function (table) {
    // 5 velden: id, title, slug, content, is_homepage
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("slug").notNullable().unique(); // string = varchar -> max 255 characters
    table.text("content").notNullable();
    table.boolean("is_homepage").defaultTo(false);
  });
}

export function down(knex) {
  return knex.schema.dropTable(tableName);
}
