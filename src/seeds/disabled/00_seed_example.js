// PLACEHOLDER FILE, DO NOT USE
// THIS FILE IS DISABLED, IT WON'T BE LOADED BY KNEX
// MOVE SEEDS TO THIS DIRECTORY TO PREVENT THEM FROM BEING LOADED
const tableName = "example";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    {
      name: "John Doe",
      email: "johndoe@example.com",
    },
  ]);
};

export { seed };
