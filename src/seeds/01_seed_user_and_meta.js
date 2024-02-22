const tableName = "users";
const tableName2 = "user_meta";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).del();
  await knex(tableName2).del();

  // firtname, lastname

  // Inserts seed entries
  const user = await knex(tableName).insert([
    { firstname: "Kastart", lastname: "Spaghetti" },
  ]);

  const userMeta = await knex(tableName2).insert([
    { user_id: user[0], age: 25, bio: "I like to make spaghetti code" },
  ]);
};

export { seed };
