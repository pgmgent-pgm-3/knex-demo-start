const tableName = "pages";

const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex(tableName).del();
  await knex(tableName).insert([
    {
      title: "Home",
      slug: "/",
      content: "<p>Welcome to our home page</p>",
      is_homepage: true,
    },
    {
      title: "About",
      slug: "about-us",
      content: `<p>We are a small company that does great things!</p>
      <p>If you would like to drink the best coffee in the world, you are in the right place.</p>
      <p>Our coffee is made from the best beans in the world and is prepared by the best baristas.</p>`,
      is_homepage: false,
    },
    {
      title: "Contact",
      slug: "contact-us",
      content: `<p>Feel free to contact us at:</p>
      <p>Phone: 123-456-7890</p>
      <p>Email:
        <a href="mailto:example@example.com">john@doe.be</a>
      </p>
      <p>And some advice: "Don't drink and code!"</p>`,
      is_homepage: false,
    },
  ]);
};

export { seed };
