/**
 * Interests API Controller
 */
import Interest from "../../models/Interest.js";

/**
 * Get a single interest
 */
export const getInterest = async (req, res, next) => {
  const id = req.params.id;
  //const interest = await Interest.query().where(id).first();
  const interest = await Interest.query().findById(id);

  res.status(200).json({
    interest,
  });
};

/**
 * Get all interests
 */
export const getInterests = async (req, res, next) => {
  // todo: return all interests, from the database
  const interests = await Interest.query();

  res.status(200).json({
    interests,
  });
};

/**
 * Create a new interest
 *
 * Request body should contain a name, for example
 * {
 *  "name": "Cycling"
 * }
 */
export const createInterest = async (req, res, next) => {
  // get interest from the request body
  const name = req.body.name;

  // validate the interest
  if (!name) {
    res.status(400).json({
      message: "name is required, for inserting an interest",
    });
  }

  // create the interest
  const insertedInterest = await Interest.query().insert({
    name,
  });

  res.json({
    message: "Interest has been created",
    interest: insertedInterest,
  });
};

/**
 * Update an interest
 *
 */
export const updateInterest = async (req, res, next) => {};

/**
 * Delete an interest
 */
export const deleteInterest = async (req, res, next) => {
  const id = req.param.id;

  // todo: delete from database, via Model

  // todo 2: return a response
};
