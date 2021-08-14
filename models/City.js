const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
   name: { type: String, required: true },
   country: { type: String, required: true },
   description: { type: String, required: true },
   img: { type: String },
   img2: { type: String },
   flag: { type: String },
   language: { type: String, required: true },
   local_currency: { type: String, required: true },
   estimated_population: { type: String, required: true },
});

const City = mongoose.model("city", citySchema);

module.exports = City;
