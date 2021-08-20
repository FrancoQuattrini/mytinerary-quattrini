import axios from "axios"

const itinerariesActions = {
   getItineraries: () => {
      return async (dispatch) => {
         let res = await axios.get("http://localhost:4000/api/itineraries")
         let itineraries = res.data.response
         dispatch({ type: "GET_ITINERARIES", payload: itineraries })
      }
   },
}

export default itinerariesActions
