/**
 * Interests API Controller
 */
import Interest from "../../models/Interest.js";

/**
 * Get a single interest
 */
export const getInterest = async (req, res, next) => {};

/**
 * Get all interests
 */
export const getInterests = async (req, res, next) => {
  // todo: return all interests, from the databasex
  const interests = await Interest.query();

  res.status(200).json({
    interests,
  });
};

/**
 * Create a new interest
 */
export const createInterest = async (req, res, next) => {};

/**
 * Update an interest
 *
 */
export const updateInterest = async (req, res, next) => {};

/**
 * Delete an interest
 */
export const deleteInterest = async (req, res, next) => {};
