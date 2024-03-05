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
  const interest = await Interest.query()
    .findById(id)
    .withGraphFetched("users");

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
    return;
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
 */
export const updateInterest = async (req, res, next) => {
  // step 1: validate if id & name are present in the request body
  if (!req.body.id || !req.body.name) {
    res.status(400).json({
      message: "id and name are required",
    });
    return;
  }

  // step 2: check if the interest with id exists
  const id = req.body.id;
  const interest = await Interest.query().findById(id);
  if (!interest) {
    res.status(404).json({
      message: "Interest not found",
    });
    return;
  }

  // step 3: check if no other interest with the same name exists
  const name = req.body.name;
  const existingInterest = await Interest.query().where("name", name).first();
  if (existingInterest) {
    res.status(400).json({
      message: "Interest with the same name already exists",
    });
    return;
  }

  // step 4: update the interest with id
  const updatedInterest = await Interest.query().patchAndFetchById(id, {
    name,
  });

  // todo 5: return the updated interest
  res.json({
    message: "Interest has been updated",
    interest: updatedInterest,
  });
};

/**
 * Delete an interest
 */
export const deleteInterest = async (req, res, next) => {
  const id = req.params.id;

  // todo 1: delete the record with id: id
  const deleted = await Interest.query().deleteById(id);

  if (deleted) {
    res.json({
      message: "Interest has been deleted",
    });
    return;
  }

  res.status(404).json({
    message: "Interest not found",
  });
};
