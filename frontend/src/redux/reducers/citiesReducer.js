const citiesReducer = (state = { cities: [], citiesSearch: [] }, action) => {
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

      default:
         return state
   }
}

export default citiesReducer
