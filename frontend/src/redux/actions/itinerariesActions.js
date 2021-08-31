import axios from "axios"

const itinerariesActions = {
   getItineraries: (id) => {
      return async (dispatch) => {
         try {
            let res = await axios.get(
               "http://localhost:4000/api/itineraries/" + id
            )
            let itineraries = res.data.response
            if (itineraries) {
               dispatch({ type: "GET_ITINERARIES", payload: itineraries })
               return { success: true }
            } else {
               throw new Error("Database Error")
            }
         } catch (err) {
            return { success: false, error: err }
         }
      }
   },

   getActivities: (id) => {
      return async () => {
         try {
            let res = await axios.get(
               "http://localhost:4000/api/activities/" + id
            )
            let activities = res.data.response
            if (activities) {
               return { success: true, response: activities }
            } else {
               throw new Error("Database Error")
            }
         } catch (err) {
            return { success: false, error: err }
         }
      }
   },

   like: (itineraryId, token) => {
      return async (dispatch, getState) => {
         try {
            let res = await axios.post(
               "http://localhost:4000/api/like/",
               { itineraryId },
               {
                  headers: {
                     Authorization: "Bearer " + token,
                  },
               }
            )
            let like = res.data.response
            console.log(res)
            if (like) {
               return { success: true, response: like }
            } else {
               throw new Error("Database Error")
            }
         } catch (err) {
            return { success: false, error: err }
         }
      }
   },
}

export default itinerariesActions
