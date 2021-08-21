import axios from "axios"

const citiesActions = {
   getCities: () => {
      return async (dispatch) => {
         try {
            let res = await axios.get("http://localhost:4000/api/cities")
            let cities = res.data.response
            dispatch({ type: "GET_CITIES", payload: cities })
            return { succes: true }
         } catch (err) {
            return { succes: false, error: err }
         }
      }
   },

   filterCities: (value) => {
      return (dispatch) => {
         dispatch({ type: "FILTER_CITIES", payload: value })
      }
   },

   getCity: (id) => {
      return (dispatch) => {
         dispatch({ type: "GET_CITY", payload: id })
      }
   },
}

export default citiesActions
