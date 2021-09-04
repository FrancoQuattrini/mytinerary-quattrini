import axios from "axios"

const itinerariesActions = {
   getItineraries: (id) => {
      return async (dispatch) => {
         try {
            let res = await axios.get(
               "https://mytinerary-quattrini.herokuapp.com/api/itineraries/" +
                  id
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
               "https://mytinerary-quattrini.herokuapp.com/api/activities/" + id
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
               "https://mytinerary-quattrini.herokuapp.com/api/like/" + id,
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

   postComment: (id, token, comment) => {
      return async (dispatch, getState) => {
         try {
            let res = await axios.post(
               "https://mytinerary-quattrini.herokuapp.com/api/comments/" + id,
               { comment },
               {
                  headers: {
                     Authorization: "Bearer " + token,
                  },
               }
            )
            if (res.data.response) {
               return { success: true, response: res.data.response }
            } else {
               throw new Error("Database Error")
            }
         } catch (err) {
            return { success: false, error: err }
         }
      }
   },

   modifyComment: (id, comment, idComment) => {
      return async (dispatch, getState) => {
         try {
            let res = await axios.put(
               "https://mytinerary-quattrini.herokuapp.com/api/comments/" + id,
               { comment, idComment }
            )
            let modifyComment = res.data.response
            if (modifyComment) {
               return { success: true, response: modifyComment }
            } else {
               throw new Error("Database Error")
            }
         } catch (err) {
            return { success: false, error: err }
         }
      }
   },

   deleteComment: (id, idComment) => {
      return async (dispatch, getState) => {
         try {
            let res = await axios.put(
               "https://mytinerary-quattrini.herokuapp.com/api/delete/" + id,
               {
                  idComment,
               }
            )
            let deleteComment = res.data.response
            if (deleteComment) {
               return { success: true, response: deleteComment }
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
