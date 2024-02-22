const tableName = "interests";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).del();
  await knex(tableName).insert([
    {
      name: "Hiking",
    },
    {
      name: "Camping",
    },
    {
      name: "Fishing",
    },
    {
      name: "Gardening",
    },
    {
      name: "Cooking",
    },
    {
      name: "Biking",
    },
    {
      name: "Reading",
    },
    {
      name: "Yoga",
    },
  ]);
};

export { seed };
