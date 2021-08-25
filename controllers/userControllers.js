const User = require("../models/User")
const bcryptjs = require("bcryptjs")

const userControllers = {
   postUser: (req, res) => {
      const { firstname, lastname, email, password, picture, country } =
         req.body
      let hashedPass = bcryptjs.hashSync(password, 10)
      const userPosted = new User({
         firstname,
         lastname,
         email,
         password: hashedPass,
         picture,
         country,
      })
      User.findOne({ email: email })
         .then((user) => {
            if (!user) {
               userPosted
                  .save()
                  .then((user) => res.json({ success: true, response: user }))
                  .catch((err) => res.json({ success: false, response: err }))
            } else {
               res.json({ success: false, response: "Email already in use" })
            }
         })
         .catch((err) => res.json({ success: false, response: err }))
   },

   logUser: (req, res) => {
      const { email, password } = req.body
      User.findOne({ email: email })
         .then((user) => {
            if (user && bcryptjs.compareSync(password, user.password)) {
               res.json({ success: true, response: user })
            } else {
               res.json({
                  success: false,
                  response: "Username and/or password incorrect",
               })
            }
         })
         .catch((err) => res.json({ success: false, response: err }))
   },

   getUsers: (req, res) => {
      User.find()
         .then((users) => res.json({ success: true, response: users }))
         .catch((err) => res.json({ success: false, response: err }))
   },

   getUser: (req, res) => {
      User.findOne({ _id: req.params.id })
         .then((user) => res.json({ success: true, response: user }))
         .catch((err) => res.json({ success: false, response: err }))
   },

   deleteUser: (req, res) => {
      User.findOneAndDelete({ _id: req.params.id })
         .then(() => res.json({ success: true, response: deleteUser }))
         .catch((err) => res.json({ success: false, response: err }))
   },

   modifyUser: (req, res) => {
      User.findOneAndUpdate({ _id: req.params.id }, { ...req.body })
         .then(() => res.json({ success: true, response: modifyUser }))
         .catch((err) => res.json({ success: false, response: err }))
   },
}

module.exports = userControllers
