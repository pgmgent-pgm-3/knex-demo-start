import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

// import related models
import UserMeta from "./UserMeta.js";
import Preference from "./Preference.js";
import Pet from "./Pet.js";

export default class User extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstname", "lastname"],
      properties: {
        id: { type: "integer" },
        firstname: { type: "string", minLength: 1, maxLength: 255 },
        lastname: { type: "string", minLength: 1, maxLength: 255 },
        bio: { type: "string" }, // not "text" because that is not a valid data type in JSON Schema
      },
    };
  }

  static get relationMappings() {
    return {
      meta: {
        relation: Model.HasOneRelation,
        modelClass: UserMeta,
        join: {
          from: "users.id",
          to: "user_meta.user_id",
        },
      },
      preference: {
        relation: Model.HasOneRelation,
        modelClass: Preference,
        join: {
          from: "users.id",
          to: "preferences.user_id",
        },
      },
      pets: {
        relation: Model.HasManyRelation,
        modelClass: Pet,
        join: {
          from: "users.id",
          to: "pets.user_id",
        },
      }
    };
  }
}
