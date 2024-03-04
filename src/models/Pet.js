import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

// import related models
import User from "./User.js";

export default class Pet extends Model {
  static get tableName() {
    return "pets";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id", "name", "species"],
      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        name: { type: "string", maxLength: 255 },
        species: { type: "string", maxLength: 255 },
        age: { type: "integer" },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation, // user_id in huidige tabel
        modelClass: User,
        join: {
          from: "pets.user_id",
          to: "users.id",
        },
      },
    };
  }
}
