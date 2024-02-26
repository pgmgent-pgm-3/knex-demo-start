import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

export default class NavigationItem extends Model {
  static get tableName() {
    return "navigation_items";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["label", "link"],
      properties: {
        id: { type: "integer" },
        label: { type: "string", minLength: 1, maxLength: 255 },
        target: { type: "string", minLength: 1, maxLength: 255 },
        url: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}
