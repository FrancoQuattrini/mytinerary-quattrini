const express = require("express")
const router = express.Router()
const citiesControllers = require("../controllers/citiesControllers")
const itinerariesControllers = require("../controllers/itinerariesControllers")
const userControllers = require("../controllers/userControllers")
const activitiesControllers = require("../controllers/activitiesControllers")
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

router
   .route("/activities")
   .get(activitiesControllers.getActivities)
   .post(activitiesControllers.postActivity)

router
   .route("/activities/:id")
   .get(activitiesControllers.getActivitiesByItinerary)

router
   .route("/like/:id")
   .put(
      passport.authenticate("jwt", { session: false }),
      itinerariesControllers.likeItinerary
   )

router
   .route("/comments/:id")
   .post(
      passport.authenticate("jwt", { session: false }),
      itinerariesControllers.postComment
   )
   .put(itinerariesControllers.modifyComment)
//    .delete(itinerariesControllers.deleteComment)

module.exports = router
