const express = require("express");
const routes = express.Router();
const profileControllers = require("../controllers/profile.controllers");
const authenticateToken = require("../middlewares/auth.js");


routes.post("/login", profileControllers.loginProfile);
routes.post("/register", profileControllers.registerProfile);
routes.get("/test/get",authenticateToken, profileControllers.readProfiles);
routes.get("/beranda/profile/:id", profileControllers.readProfile);
routes.post("/test/regiter", profileControllers.createProfile);
routes.patch("/profile/:id", profileControllers.updateProfile);
routes.delete("/profile/:id", profileControllers.deleteProfile);

module.exports = routes;
