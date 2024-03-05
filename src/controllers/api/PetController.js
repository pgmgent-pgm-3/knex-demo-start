import Pet from "../../models/Pet.js";

/**
 * Get a single user
 */
export const getPet = async (req, res, next) => {
  const id = req.params.id;
  const user = await Pet.query().findById(id).withGraphFetched("user");

  res.json(user);
};

/**
 * Get all pets
 */
export const getPets = async (req, res, next) => {
  const pets = await Pet.query();

  res.json(pets);
};
