const express = require("express");
const routes = express.Router();
const profileControllers = require("../controllers/profile.controllers");
const authenticateToken = require("../middlewares/auth.js");

routes.post("/login/adv", profileControllers.login);
routes.post("/login", profileControllers.loginProfile);
routes.post("/register", profileControllers.registerProfile);
routes.post("/register/adv", profileControllers.register);
routes.get("/test/get", profileControllers.readProfiles);
routes.get("/:id", authenticateToken, profileControllers.readProfile);
routes.post("/test/regiter", profileControllers.createProfile);
routes.patch("/:id", authenticateToken, profileControllers.updateProfile);
routes.delete("/:id", authenticateToken, profileControllers.deleteProfile);

module.exports = routes;
