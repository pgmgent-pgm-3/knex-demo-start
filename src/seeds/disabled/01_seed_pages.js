const tableName = "pages";

const seed = async function (knex) {
  await knex(tableName).truncate();

  // id, title, slug, content, is_homepage (boolean)

  await knex(tableName).insert([
    {
      title: "Home",
      slug: "/",
      content: `
        <p>Welcome to our website. We are a small company that does great things!</p>
        <p>Feel free to browse our site and learn more about us.</p>
      `,
      is_homepage: true,
    },
    {
      title: "About Us",
      slug: "about-us",
      content: `
        <p>We are a small company that does great things!</p>
        <p>If you would like to drink the best coffee in the world, you are in the right place.</p>
        <p>Our coffee is made from the best beans in the world and is prepared by the best baristas.</p>
      `,
      is_homepage: false,
    },
    {
      title: "Contact",
      slug: "contact",
      content: `
        <p>Feel free to contact us at:</p>
        <p>Phone: 123-456-7890</p>
        <p>Email:
          <a href="mailto:frederick@rogerthat.be"</a>
        </p>
        `,
      is_homepage: false,
    },
  ]);
};

export { seed };
