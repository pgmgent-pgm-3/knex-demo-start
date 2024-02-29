const tableName = "interests";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    // name, priority
    { name: "Music", priority: 2 },
    { name: "Movies", priority: 5 },
    { name: "Sports", priority: 4 },
    { name: "Reading", priority: 3 },
    { name: "Traveling", priority: 1 },
  ]);
};

export { seed };
