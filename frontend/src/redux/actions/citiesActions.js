import axios from "axios"

const citiesActions = {
   getCities: () => {
      return async (dispatch) => {
         try {
            let res = await axios.get(
               "https://mytinerary-quattrini.herokuapp.com/api/cities"
            )
            let cities = res.data.response
            if (cities) {
               dispatch({ type: "GET_CITIES", payload: cities })
               return { success: true }
            } else {
               throw new Error("Database Error")
            }
         } catch (err) {
            return { success: false, error: err }
         }
      }
   },

   filterCities: (value) => {
      return (dispatch) => {
         dispatch({ type: "FILTER_CITIES", payload: value })
      }
   },
}

export default citiesActions
