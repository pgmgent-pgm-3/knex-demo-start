const tableName = "interests";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();

  await knex(tableName).insert([
    { name: "Music" },
    { name: "Sports" },
    { name: "Movies" },
    { name: "Books" },
    { name: "Cooking" },
    { name: "Hiking" },
    { name: "Gaming" },
    { name: "Traveling" },
    { name: "Photography" },
    { name: "Dancing" },
  ]);
};

export { seed };
