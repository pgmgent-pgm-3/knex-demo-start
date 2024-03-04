const tableName = "user_meta";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate();
  await knex(tableName).insert([
    {
      user_id: 1,
      quote: "Yeah",
      location: "Gotham",
    },
    {
      user_id: 2,
      quote: "Holy smokes Batman",
      location: "Gotham",
    },
    {
      user_id: 3,
      quote: "Why so serious?",
      location: "Gotham",
    },
  ]);
};

export { seed };
