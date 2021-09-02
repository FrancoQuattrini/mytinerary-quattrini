const usersReducer = (
   state = {
      token: null,
      firstname: null,
      picture: null,
      email: null,
   },
   action
) => {
   switch (action.type) {
      case "ACTION_USER":
         localStorage.setItem("token", action.payload.token)
         localStorage.setItem("firstname", action.payload.firstname)
         localStorage.setItem("picture", action.payload.picture)
         localStorage.setItem("email", action.payload.email)

         return {
            token: action.payload.token,
            firstname: action.payload.firstname,
            picture: action.payload.picture,
            email: action.payload.email,
         }
      case "LOG_OUT":
         localStorage.clear()
         return {
            token: null,
            firstname: null,
            picture: null,
            email: null,
         }
      default:
         return state
   }
}

export default usersReducer
