const express = require("express")
const router = express.Router()
const citiesControllers = require("../controllers/citiesControllers")
const itinerariesControllers = require("../controllers/itinerariesControllers")

router
   .route("/cities")
   .get(citiesControllers.getCities)
   .post(citiesControllers.postCity)

router
   .route("/city/:id")
   .get(citiesControllers.getCity)
   .delete(citiesControllers.deleteCity)
   .put(citiesControllers.modifyCity)

router
   .route("/itineraries")
   .get(itinerariesControllers.getItineraries)
   .post(itinerariesControllers.postItinerary)

router
   .route("/itinerary/:id")
   .get(itinerariesControllers.getItinerary)
   .delete(itinerariesControllers.deleteItinerary)
   .put(itinerariesControllers.modifyItinerary)

module.exports = router
