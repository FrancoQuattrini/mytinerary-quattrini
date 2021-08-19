const Itinerary = require("../models/Itinerary")

const itinerariesControllers = {
   getItineraries: (req, res) => {
      Itinerary.find()
         .then((itineraries) =>
            res.json({ success: true, response: itineraries })
         )
         .catch((err) => res.json({ success: false, response: err }))
   },

   getItinerary: (req, res) => {
      Itinerary.findOne({ _id: req.params.id })
         .then((itinerary) => res.json({ success: true, response: itinerary }))
         .catch((err) => res.json({ success: false, response: err }))
   },

   postItinerary: (req, res) => {
      const itineraryToPost = new Itinerary({ ...req.body })
      itineraryToPost
         .save()
         .then((itinerary) => res.json({ success: true, response: itinerary }))
         .catch((err) => res.json({ success: false, response: err }))
   },

   deleteItinerary: (req, res) => {
      Itinerary.findOneAndDelete({ _id: req.params.id })
         .then(() => res.json({ success: true, response: "deleteItinerary" }))
         .catch((err) => res.json({ success: false, response: err }))
   },

   modifyItinerary: (req, res) => {
      Itinerary.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
         .then((modifyItinerary) =>
            res.json({ success: true, response: modifyItinerary })
         )
         .catch((err) => res.json({ success: false, response: err }))
   },
}
module.exports = itinerariesControllers
