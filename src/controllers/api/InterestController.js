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
 */
export const createInterest = async (req, res, next) => {
  // test
  // res.send(req.body);

  const interest = req.body.interest;
  if (!interest) {
    res.status(400).json({
      message: "Interest is required",
    });
  }

  res.send("ok");
};

/**
 * Update an interest
 *
 */
export const updateInterest = async (req, res, next) => {};

/**
 * Delete an interest
 */
export const deleteInterest = async (req, res, next) => {};
