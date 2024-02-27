import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

export default class NavigationItem extends Model {
  static get tableName() {
    return "pages";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title", "slug", "content"],
      properties: {
        id: { type: "integer" },
        title: { type: "string" },
        slug: { type: "string" },
        content: { type: "string" },
        is_homepage: { type: "boolean" },
      },
    };
  }
}
