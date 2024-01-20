const express = require("express");
const routes = express.Router();
const profileControllers = require("../controllers/profile.controllers");
const authenticateToken = require("../middlewares/auth.js");

routes.post("/login", profileControllers.login);
routes.post("/register", profileControllers.register);
routes.get("/test/get", profileControllers.readProfiles);
routes.get("/:id", authenticateToken, profileControllers.readProfile);
routes.patch("/:id", authenticateToken, profileControllers.updateProfile);
routes.delete("/:id", authenticateToken, profileControllers.deleteProfile);

module.exports = routes;
