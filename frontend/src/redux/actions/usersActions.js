import axios from "axios"

const usersActions = {
   postUser: (newUser) => {
      return async (dispatch) => {
         try {
            let res = await axios.post(
               "http://localhost:4000/api/user/signup",
               newUser
            )
            if (res.data.success) {
               dispatch({ type: "ACTION_USER", payload: res.data.response })
               return { success: true }
            } else {
               throw new Error("Database Error")
            }
         } catch (err) {
            return { success: false, error: err }
         }
      }
   },

   logIn: (login) => {
      return async (dispatch) => {
         try {
            let res = await axios.post(
               "http://localhost:4000/api/user/login",
               login
            )
            if (res.data.success) {
               dispatch({ type: "ACTION_USER", payload: res.data.response })
               return { success: true }
            } else {
               throw new Error("Database Error")
            }
         } catch (err) {
            return { success: false, error: err }
         }
      }
   },

   logOut: () => {
      return (dispatch, getState) => {
         dispatch({ type: "LOG_OUT" })
      }
   },

   logInLS: (token, firstname, picture) => {
      return (dispatch, getState) => {
         dispatch({
            type: "ACTION_USER",
            payload: { token, firstname, picture },
         })
      }
   },
}

export default usersActions
