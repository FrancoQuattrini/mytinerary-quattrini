const mongoose = require("mongoose")

const itinerarySchema = new mongoose.Schema({
   nameUser: { type: String, required: true },
   imgUser: { type: String, required: true },
   price: { type: Number, required: true, min: 1, max: 5 },
   duration: { type: Number, required: true, min: 1 },
   likes: { type: Number, default: 0 },
   title: { type: String, required: true },
   description: { type: String, required: true },
   img: { type: String, required: true },
   hashtags: [{ type: String, required: true }],
   languages: [{ type: String, required: true }],
   cityId: { type: mongoose.Types.ObjectId, ref: "city" },
})

const Itinerary = mongoose.model("itinerary", itinerarySchema)

module.exports = Itinerary
