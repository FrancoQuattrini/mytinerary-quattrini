const express = require("express");
const router = express.Router();
const citiesControllers = require("../controllers/citiesControllers");

router.route("/cities").get(citiesControllers.getCities);

router.route("/city/:id").get(citiesControllers.getCity);

module.exports = router;
