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

   like: (id, token) => {
      return async (dispatch, getState) => {
         try {
            let res = await axios.put(
               "http://localhost:4000/api/like/" + id,
               {},
               {
                  headers: {
                     Authorization: "Bearer " + token,
                  },
               }
            )
            let like = res.data.response
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

   postComment: (id, token) => {
      return async (dispatch, getState) => {
         try {
            let res = await axios.post(
               "http://localhost:4000/api/comments/" + id,
               { comment },
               {
                  headers: {
                     Authorization: "Bearer " + token,
                  },
               }
            )
            let comment = res.data.response
            if (comment) {
               return { success: true, response: comment }
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
