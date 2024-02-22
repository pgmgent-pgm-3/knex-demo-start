const tableName = "user_interests";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).del();

  // get all the user ids
  const users = await knex("users").select("id");
  // get all the interest ids
  const interests = await knex("interests").select("id");

  // assign multiple, random interests to each user
  const userInterests = [];
  users.forEach((user) => {
    const numberOfInterests = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < numberOfInterests; i++) {
      const interest = interests[Math.floor(Math.random() * interests.length)];

      // check if not already in the array
      const exists = userInterests.find(
        (ui) => ui.user_id === user.id && ui.interest_id === interest.id
      );
      if (exists) continue;

      userInterests.push({
        user_id: user.id,
        interest_id: interest.id,
      });
    }
  });

  // insert the user interests
  await knex(tableName).insert(userInterests);
};

export { seed };
