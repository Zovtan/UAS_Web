const express = require("express");
const routes = express.Router();
const profileControllers = require("../controllers/profile.controllers");
const authenticateToken = require("../middlewares/auth.js");


routes.post("/", profileControllers.loginProfile);
routes.get("/test/",authenticateToken, profileControllers.readProfiles);
routes.get("/beranda/profile/:id", profileControllers.readProfile);
routes.post("/register", profileControllers.createProfile);
routes.patch("/beranda/profile/:id", profileControllers.updateProfile);
routes.delete("/beranda/profile/:id", profileControllers.deleteProfile);

module.exports = routes;
