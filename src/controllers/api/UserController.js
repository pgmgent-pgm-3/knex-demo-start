/**
 * User API Controller
 */

import User from "../../models/User.js";

/**
 * Get a single user
 */
export const getUser = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.query().findById(id).withGraphFetched("meta");

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
export const createUser = async (req, res, next) => {};

/**
 * Update an user
 *
 */
export const updateUser = async (req, res, next) => {};

/**
 * Delete an user
 */
export const deleteUser = async (req, res, next) => {};
