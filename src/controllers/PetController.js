import Pet from "../models/Pet.js";

export const index = async (req, res) => {};

export const create = async (req, res) => {
  const pet = await Pet.query().insert({
    user_id: parseInt(req.body.user_id),
    name: req.body.name,
    species: req.body.species,
    age: parseInt(req.body.age),
  });
  res.redirect("/users/" + req.body.user_id + "/pets");
};

export const update = async (req, res) => {
  const petId = req.body.id;
  const pet = await Pet.query().patchAndFetchById(petId, {
    name: req.body.name,
    species: req.body.species,
    age: parseInt(req.body.age),
  });
  res.redirect("/users/4/pets");
};

export const destroy = async (req, res) => {
  const petId = req.body.id;
  const deleted = await Pet.query().deleteById(petId);
  res.redirect("/users/4/pets");
};

export const handlePost = async (req, res) => {
  const method = req.body.method;
  if (method == "POST") {
    create(req, res);
  }
  if (method == "PUT") {
    update(req, res);
  }
  if (method == "DELETE") {
    destroy(req, res);
  }
};
