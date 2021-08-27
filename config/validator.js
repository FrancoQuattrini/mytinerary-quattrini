const joi = require("joi")

const validator = (req, res, next) => {
   const schema = joi.object({
      firstname: joi
         .string()
         .trim()
         .min(2)
         .max(20)
         .required()
         .pattern(new RegExp("[a-zA-Z]$"))
         .messages({
            "string.empty": "The firstname field cannot be empty",
            "string.min":
               "The firstname field must be at least 2 characters long",
            "string.max":
               "The firstname field cannot be longer than 20 characters",
            "string.pattern.base":
               "The firstname field can only contain letters",
         }),
      lastname: joi
         .string()
         .trim()
         .min(2)
         .max(20)
         .required()
         .pattern(new RegExp("[a-zA-Z]$"))
         .messages({
            "string.empty": "The lastname field cannot be empty",
            "string.min":
               "The lastname field must be at least 2 characters long",
            "string.max":
               "The lastname field cannot be longer than 20 characters",
            "string.pattern.base":
               "The lastname field can only contain letters",
         }),
      email: joi.string().trim().email().required().messages({
         "string.empty": "The email field cannot be empty",
         "string.email": "The email field must contain a valid URL",
      }),
      password: joi
         .string()
         .min(6)
         .trim()
         .required()
         .pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$"))
         .messages({
            "string.empty": "The password field cannot be empty",
            "string.min":
               "The password field must be at least 6 characters long",
            "string.pattern.base":
               "The password field must be at least 6 characters long and include 1 uppercase, 1 lowercase and 1 number",
         }),
      picture: joi.string().required().uri().messages({
         "string.empty": "The URL picture field cannot be empty",
         "string.uri": "The URL picture field must contain a valid URL",
      }),
      country: joi.string().required().messages({
         "string.empty": "You must select a country",
      }),
   })

   const validation = schema.validate(req.body, { abortEarly: false })
   if (!validation.error) {
      next()
   } else {
      console.log(validation.error)
      res.json({ success: false, errors: validation.error.details })
   }
}

module.exports = validator
