import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

// import related models
import User from "./User.js";

export default class UserMeta extends Model {
  static get tableName() {
    return "user_meta";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["quote", "location", "user_id"],
      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        quote: { type: "string", minLength: 1, maxLength: 255 },
        location: { type: "string", minLength: 1, maxLength: 50 },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "user_meta.user_id",
          to: "users.id",
        },
      },
    };
  }
}
