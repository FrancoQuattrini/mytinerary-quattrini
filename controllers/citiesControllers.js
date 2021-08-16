const City = require("../models/City");

const citiesControllers = {
   getCities: (req, res) => {
      City.find()
         .then((cities) => res.json({ success: true, response: cities }))
         .catch((err) => res.json({ success: false, response: err }));
   },

   getCity: (req, res) => {
      City.findOne({ _id: req.params.id }).then((city) =>
         res
            .json({ success: true, response: city })
            .catch((err) => res.json({ success: false, response: err }))
      );
   },

   postCity: (req, res) => {
      const cityToPost = new City({
         name: req.body.name,
         country: req.body.country,
         description: req.body.description,
         img: req.body.img,
         img2: req.body.img2,
         flag: req.body.flag,
         language: req.body.language,
         local_currency: req.body.local_currency,
         estimated_population: req.body.estimated_population,
      });
      cityToPost
         .save()
         .then(() => res.json({ success: true, response: city }))
         .catch((err) => res.json({ success: false, response: err }));
   },

   deleteCity: (req, res) => {
      City.findOneAndDelete({ _id: req.params.id }).then(() =>
         res
            .json({ success: true, response: deleteCity })
            .catch((err) => res.json({ success: false, response: err }))
      );
   },

   modifyCity: (req, res) => {
      City.findOneAndUpdate({ _id: req.params.id }, { ...req.body }).then(() =>
         res
            .json({ success: true, response: modifyCity })
            .catch((err) => res.json({ success: false, response: err }))
      );
   },
};

module.exports = citiesControllers;
