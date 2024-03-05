import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

// related models
import User from "./User.js";

class Interest extends Model {
  static get tableName() {
    return "interests";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", minLength: 3, maxLength: 255 },
      },
    };
  }

  static get relationMappings() {
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "interests.id",
          through: {
            from: "interest_user.interest_id",
            to: "interest_user.user_id",
          },
          to: "users.id",
        },
      },
    };
  }
}

export default Interest;
