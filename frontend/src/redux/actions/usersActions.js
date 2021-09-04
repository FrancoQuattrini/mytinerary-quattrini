import axios from "axios"

const usersActions = {
   postUser: (newUser) => {
      return async (dispatch) => {
         try {
            let res = await axios.post(
               "https://mytinerary-quattrini.herokuapp.com/api/user/signup",
               newUser
            )
            if (res.data.success) {
               dispatch({ type: "ACTION_USER", payload: res.data.response })
               return { success: true }
            } else {
               return { success: false, errors: res.data.errors }
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
               "https://mytinerary-quattrini.herokuapp.com/api/user/login",
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

   logInLS: (token) => {
      return async (dispatch, getState) => {
         try {
            let res = await axios.get(
               "https://mytinerary-quattrini.herokuapp.com/api/verifytoken",
               {
                  headers: {
                     Authorization: "Bearer " + token,
                  },
               }
            )
            dispatch({
               type: "ACTION_USER",
               payload: {
                  token,
                  firstname: res.data.firstname,
                  picture: res.data.picture,
                  email: res.data.email,
                  id: res.data.id,
               },
            })
         } catch (err) {
            return dispatch({ type: "LOG_OUT" })
         }
      }
   },
}

export default usersActions
