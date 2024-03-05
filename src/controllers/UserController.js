import User from "../models/User.js";
import NavigationItem from "../models/NavigationItem.js";

export const index = async (req, res) => {
  const menuItems = await NavigationItem.query();

  const users = await User.query();
  res.render("users", { users, menuItems });
};

export const getUserPets = async (req, res) => {
  const menuItems = await NavigationItem.query();

  const userId = req.params.id;
  const user = await User.query().findById(userId).withGraphFetched("pets");
  const pets = user.pets;
  res.render("users/pets", { user, pets, menuItems });
};

export const show = async (req, res) => {};
