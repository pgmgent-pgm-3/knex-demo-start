import express from "express";
import { create } from "express-handlebars";
import { PORT, VIEWS_PATH } from "./consts.js";
import HandlebarsHelpers from "./lib/HandlebarsHelpers.js";
import bodyParser from "body-parser";

import { /* home, */ page } from "./controllers/PageController.js";
import {
  getInterest,
  getInterests,
  createInterest,
  updateInterest,
  deleteInterest,
} from "./controllers/api/InterestController.js";
import {
  createUser,
  getUser,
  getUsers,
} from "./controllers/api/UserController.js";

import { getPet, getPets } from "./controllers/api/PetController.js";

import * as PetController from "./controllers/PetController.js";
import * as UserController from "./controllers/UserController.js";

const app = express();
app.use(express.static("public"));

/**
 * Body Parser,
 * to parse incoming request bodies
 * available under the req.body property.
 * This is useful for parsing JSON and URL encoded data.
 *
 * */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Handlebars Init
 */
const hbs = create({
  helpers: HandlebarsHelpers,
  extname: "hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", VIEWS_PATH);

/**
 * App routes for pages that will be rendered in the browser.
 */

// app.get("/", home);
app.get("/", page);

// Gebruikersroutes
app.get("/users", UserController.index); // Overzicht van alle gebruikers
app.get("/users/:id/pets", UserController.getUserPets); // Overzicht van huisdieren van een specifieke gebruiker
app.get("/users/:id", UserController.show); // Toon details van een specifieke gebruiker (optioneel)

// Huisdierenroutes
app.post("/pets", PetController.create); // Maak een nieuw huisdier
app.post("/pets/:id/update", PetController.update); // Werk een huisdier bij
app.post("/pets/:id/delete", PetController.destroy); // Verwijder een huisdier

// wildcard route
// app.get("/about-us", about);
// app.get("/contact-us", contact);
app.get("/:slug", page); // shortcut for all pages, except the homepage

/**
 * API interest routes.
 */
app.get("/api/interest/:id", getInterest);
app.get("/api/interest", getInterests);
app.post("/api/interest", createInterest);
app.put("/api/interest", updateInterest);
app.delete("/api/interest/:id", deleteInterest);

app.get("/api/user", getUsers);
app.get("/api/user/:id", getUser);
app.post("/api/user", createUser);

app.get("/api/pet", getPets);
app.get("/api/pet/:id", getPet);

/**
 * API user routes.
 */
app.get("/api/user", getUsers);

// initialize the app
app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}/.`);
});
