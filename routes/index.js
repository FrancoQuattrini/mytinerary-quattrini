const express = require("express");
const router = express.Router();
const citiesControllers = require("../controllers/citiesControllers");

router
   .route("/cities")
   .get(citiesControllers.getCities)
   .post(citiesControllers.postCity);

router
   .route("/city/:id")
   .get(citiesControllers.getCity)
   .delete(citiesControllers.deleteCity)
   .put(citiesControllers.modifyCity);

module.exports = router;
