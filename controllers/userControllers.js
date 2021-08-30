const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userControllers = {
   postUser: (req, res) => {
      const { firstname, lastname, email, password, picture, country, google } =
         req.body
      let hashedPass = bcryptjs.hashSync(password, 10)
      const newUser = new User({
         firstname,
         lastname,
         email,
         password: hashedPass,
         picture,
         country,
         google,
      })
      User.findOne({ email: email })
         .then((user) => {
            if (!user) {
               newUser
                  .save()
                  .then((user) => {
                     const token = jwt.sign({ ...user }, process.env.SECRETKEY)
                     res.json({
                        success: true,
                        response: {
                           firstname: user.firstname,
                           picture: user.picture,
                           token,
                        },
                     })
                  })
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
            const token = jwt.sign({ ...user }, process.env.SECRETKEY)
            if (user && bcryptjs.compareSync(password, user.password)) {
               res.json({
                  success: true,
                  response: {
                     firstname: user.firstname,
                     picture: user.picture,
                     token,
                  },
               })
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

   verifyToken: (req, res) => {
      res.json({ firstname: req.user.firstname, picture: req.user.picture })
   },
}

module.exports = userControllers
