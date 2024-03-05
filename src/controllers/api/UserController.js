/**
 * User API Controller
 */

import User from "../../models/User.js";

/**
 * Get a single user
 */
export const getUser = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.query()
    .findById(id)
    .withGraphFetched("[meta, preference, pets, interests]");

  res.json(user);
};

/**
 * Get all users
 */
export const getUsers = async (req, res, next) => {
  const users = await User.query();

  res.json(users);
};

/**
 * Create a new user
 */
export const createUser = async (req, res, next) => {
  // res.send("Yes, this endpoint works");
  // return;

  const pet1 = {
    name: "Tissue",
    species: "Pekinees",
    age: 15,
  };

  const pet2 = {
    name: "Jefke",
    species: "Alligator",
    age: 2,
  };

  const pet3 = {
    name: "Johny",
    species: "Kangoeroe",
    age: 2,
  };

  const userData = {
    firstname: "Tristan",
    lastname: "Van de Moortel",
    bio: "I am a cool guy",
    pets: [pet1, pet2, pet3],
  };

  const user = await User.query().insertGraph(userData);

  res.json(user);
};

/**
 * Update an user
 *
 */
export const updateUser = async (req, res, next) => {};

/**
 * Delete an user
 */
export const deleteUser = async (req, res, next) => {};
