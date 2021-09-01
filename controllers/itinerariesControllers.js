const Itinerary = require("../models/Itinerary")

const itinerariesControllers = {
   getItineraries: (req, res) => {
      Itinerary.find()
         .populate("cityId")
         .then((itineraries) =>
            res.json({ success: true, response: itineraries })
         )
         .catch((err) => res.json({ success: false, response: err }))
   },

   getItinerariesByCity: (req, res) => {
      Itinerary.find({ cityId: req.params.id })
         .populate("cityId")
         .then((itinerariesByCity) =>
            res.json({ success: true, response: itinerariesByCity })
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
         .then(() => res.json({ success: true, response: "deletedItinerary" }))
         .catch((err) => res.json({ success: false, response: err }))
   },

   modifyItinerary: (req, res) => {
      Itinerary.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
         .then((modifyItinerary) =>
            res.json({ success: true, response: modifyItinerary })
         )
         .catch((err) => res.json({ success: false, response: err }))
   },

   likeItinerary: (req, res) => {
      Itinerary.findOne({ _id: req.params.id })
         .then((itinerary) => {
            if (itinerary.likes.includes(req.user._id)) {
               Itinerary.findOneAndUpdate(
                  { _id: req.params.id },
                  { $pull: { likes: req.user._id } },
                  { new: true }
               ).then((dislike) =>
                  res.json({ success: true, response: dislike })
               )
            } else {
               Itinerary.findOneAndUpdate(
                  { _id: req.params.id },
                  { $push: { likes: req.user._id } },
                  { new: true }
               ).then((like) => res.json({ success: true, response: like }))
            }
         })
         .catch((err) => res.json({ success: false, response: err }))
   },

   postComment: (req, res) => {
      Itinerary.findOneAndUpdate(
         { _id: req.params.id },
         { $push: { comments: { userId: req.user._id, comment: comment } } },
         { new: true }
      )
         .populate({
            path: "comments",
            populate: {
               path: "userId",
               select: { firstName: 1, lastName: 1, email: 1, picture: 1 },
            },
         })
         .then((modifyItinerary) =>
            res.json({ success: true, response: postComment })
         )
         .catch((err) => res.json({ success: false, response: err }))
   },

   // deleteComment: (req, res) => {
   //    Itinerary.findOneAndDelete({ _id: req.params.id })
   //       .then(() => res.json({ success: true, response: "deletedItinerary" }))
   //       .catch((err) => res.json({ success: false, response: err }))
   // },

   // modifyComment: (req, res) => {
   //    Itinerary.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
   //       .then((modifyItinerary) =>
   //          res.json({ success: true, response: modifyItinerary })
   //       )
   //       .catch((err) => res.json({ success: false, response: err }))
   // },
}

module.exports = itinerariesControllers
