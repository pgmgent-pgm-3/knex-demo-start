import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

// import related models
import User from "./User.js";

export default class Preference extends Model {
  // tabelnaam, idColumn, jsonschema
  static get tableName() {
    return "preferences";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["user_id", "theme", "language"],
      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        theme: { type: "string", maxLength: 255 },
        language: { type: "string", maxLength: 255 },
      },
    };
  }

  static get relationMappings() {
    // user id in current table --> belongsTo
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "preferences.user_id",
          to: "users.id",
        },
      },
    };
  }
}
