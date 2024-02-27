/**
 * PageController
 * Simple pages will be handled by this controller.
 * A simple page is a page that does not contain many business logic.
 */

// import menuItems from "../data/menu.js";
// import userData from "../data/user.js";
import NavigationItem from "../models/NavigationItem.js";
import User from "../models/User.js";
import Page from "../models/Page.js";

export const home = async (req, res) => {
  const menuItems = await NavigationItem.query();
  const userData = await User.query().findById(1);
  // const pageData = await Page.query().where("is_homepage", true).first();
  const pageData = await Page.query().findOne({ slug: "/" });

  res.render("home", {
    ...pageData,
    userData,
    menuItems,
  });
};

export const page = async (req, res) => {
  // get the slug from the request parameters, if it is not present, use "/"
  const slug = req.params.slug || "/";

  // get the menu items and the page data
  const menuItems = await NavigationItem.query();
  const pageData = await Page.query().findOne({ slug });

  // alternative way to get the homepage data
  // you could choose to use this method, however, it is not necessarely better than the one above
  // the one above is more explicit and easier to understand, this one is more concise
  if (pageData.is_homepage) {
    const userData = await User.query().findById(1);
    res.render("home", {
      ...pageData,
      userData,
      menuItems,
    });
    return;
  }

  // render the default page
  res.render("default", {
    ...pageData,
    menuItems,
  });
};
