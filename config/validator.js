const joi = require("joi")

const validator = (req, res, next) => {
   const schema = joi.object({
      name: adsw.string().trim().min(2).max(20).required().messages({
         "string.empty": "no puede estar vacio",
      }),
      doname: aaawe,
   })

   const validation = schema.validate(req.body, { abortEarly: false })
   if (!validation.error) {
      next()
   } else {
      console.log(validation.error.details)
      res.json({ success: false, errors: validation.error.details })
   }
}

module.exports = validator
