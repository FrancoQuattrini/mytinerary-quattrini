const express = require("express")
const router = express.Router()
const citiesControllers = require("../controllers/citiesControllers")
const itinerariesControllers = require("../controllers/itinerariesControllers")
const userControllers = require("../controllers/userControllers")

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
   .route("/itineraries/:id")
   .get(itinerariesControllers.getItinerariesByCity)

router
   .route("/itinerary/:id")
   .get(itinerariesControllers.getItinerary)
   .delete(itinerariesControllers.deleteItinerary)
   .put(itinerariesControllers.modifyItinerary)

router.route("/user/signup").post(userControllers.postUser)
router.route("/user/login").post(userControllers.logUser)

router
   .route("/user/:id")
   .get(userControllers.getUser)
   .delete(userControllers.deleteUser)
   .put(userControllers.modifyUser)

router.route("/users").get(userControllers.getUsers)

module.exports = router
