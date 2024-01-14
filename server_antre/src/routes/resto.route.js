const express = require("express");
const routes = express.Router();

const restoControllers = require("../controllers/resto.controllers");

routes.get("/", restoControllers.readRestos);
routes.get("/:id", restoControllers.readResto);

module.exports = routes;
