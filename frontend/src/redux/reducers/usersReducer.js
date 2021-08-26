const usersReducer = (
   state = {
      token: null,
      firstname: null,
      picture: null,
   },
   action
) => {
   switch (action.type) {
      case "ACTION_USER":
         localStorage.setItem("token", action.payload.token)
         localStorage.setItem("firstname", action.payload.firstname)
         localStorage.setItem("picture", action.payload.picture)

         return {
            token: action.payload.token,
            firstname: action.payload.firstname,
            picture: action.payload.picture,
         }
      case "LOG_OUT":
         localStorage.clear()
         return {
            token: null,
            firstname: null,
            picture: null,
         }
      default:
         return state
   }
}

export default usersReducer
