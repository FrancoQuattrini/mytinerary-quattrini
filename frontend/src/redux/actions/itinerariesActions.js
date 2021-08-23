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

   // getItineraries: () => {
   //    return async (dispatch) => {
   //       let res = await axios.get("http://localhost:4000/api/itineraries")
   //       let itineraries = res.data.response
   //       dispatch({ type: "GET_ITINERARIES", payload: itineraries })
   //    }
   // },
}

export default itinerariesActions
