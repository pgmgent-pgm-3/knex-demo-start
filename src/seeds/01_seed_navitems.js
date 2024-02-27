const tableName = "navigation_items";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).truncate(); // or truncate if you want to reset the id
  await knex(tableName).insert([
    {
      label: "Home",
      url: "/",
      target: "_self",
    },
    {
      label: "About",
      url: "/about-us",
      target: "_self",
    },
    {
      label: "Contact",
      url: "/contact-us",
      target: "_self",
    },
    {
      label: "Facebook 🦄",
      url: "https://www.facebook.com",
      target: "_blank",
    },
  ]);
};

export { seed };
