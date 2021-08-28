const express = require("express")
const router = express.Router()
const citiesControllers = require("../controllers/citiesControllers")
const itinerariesControllers = require("../controllers/itinerariesControllers")
const userControllers = require("../controllers/userControllers")
const passport = require("passport")
const validator = require("../config/validator")

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

router.route("/user/signup").post(validator, userControllers.postUser)
router.route("/user/login").post(userControllers.logUser)

router.route("/users").get(userControllers.getUsers)

router
   .route("/verifytoken")
   .get(
      passport.authenticate("jwt", { session: false }),
      userControllers.verifyToken
   )

module.exports = router
