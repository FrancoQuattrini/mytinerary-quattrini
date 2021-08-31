const Activity = require("../models/Activity")

const activitiesControllers = {
   getActivities: (req, res) => {
      Activity.find()
         .populate("itineraryId")
         .then((activities) =>
            res.json({ success: true, response: activities })
         )
         .catch((err) => res.json({ success: false, response: err }))
   },

   getActivitiesByItinerary: (req, res) => {
      Activity.find({ itineraryId: req.params.id })
         .populate("itineraryId")
         .then((activitiesByItinerary) =>
            res.json({ success: true, response: activitiesByItinerary })
         )
         .catch((err) => res.json({ success: false, response: err }))
   },

   postActivity: (req, res) => {
      const activityToPost = new Activity({ ...req.body })
      activityToPost
         .save()
         .then((activity) => res.json({ success: true, response: activity }))
         .catch((err) => res.json({ success: false, response: err }))
   },
}
module.exports = activitiesControllers
