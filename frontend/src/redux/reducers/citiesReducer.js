const citiesReducer = (
   state = { cities: [], citiesSearch: [], city: [] },
   action
) => {
   switch (action.type) {
      case "GET_CITIES":
         return {
            ...state,
            cities: action.payload,
            citiesSearch: action.payload,
         }
      case "FILTER_CITIES":
         return {
            ...state,
            citiesSearch: state.cities.filter((city) =>
               city.name
                  .toLowerCase()
                  .startsWith(action.payload.toLowerCase().trim())
            ),
         }

      case "GET_CITY":
         return {
            ...state,
            city: state.cities.find((city) => city._id === action.payload),
         }

      default:
         return state
   }
}

export default citiesReducer
