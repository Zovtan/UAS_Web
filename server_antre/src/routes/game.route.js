const express = require("express");
const routes = express.Router();

const profileControllers = require("../controllers/profile.controllers");

routes.get("/", profileControllers.readProfiles);
routes.get("/:id", profileControllers.readProfile);
routes.post("/", profileControllers.createProfile);
routes.patch("/:id", profileControllers.updateProfile);
routes.delete("/:id", profileControllers.deleteProfile);

module.exports = routes;
