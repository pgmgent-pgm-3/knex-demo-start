const tableName = "users";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    {
      firstname: "Ada",
      lastname: "Lovelace",
      bio: "First computer programmer",
    },
    {
      firstname: "Grace",
      lastname: "Hopper",
      bio: "Invented the first compiler for a computer programming language",
    },
    {
      firstname: "Katherine",
      lastname: "Johnson",
      bio: "Mathematician who calculated and analyzed the flight paths of many spacecraft during her more than three decades with the U.S. space program",
    },
  ]);
};

export { seed };
