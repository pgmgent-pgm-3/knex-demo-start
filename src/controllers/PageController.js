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
  const slug = req.params.slug;

  const menuItems = await NavigationItem.query();
  const pageData = await Page.query().findOne({ slug });
  console.log(pageData);

  res.render("default", {
    ...pageData,
    menuItems,
  });
};
