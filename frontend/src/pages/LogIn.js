import Header from "../components/Header"
import Footer from "../components/Footer"
import Back from "../assets/travel.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { connect } from "react-redux"
import usersActions from "../redux/actions/usersActions"
import Swal from "sweetalert2"

const LogIn = (props) => {
   const [login, setLogin] = useState({
      email: "",
      password: "",
   })

   const inputHandler = (e) => {
      setLogin({
         ...login,
         [e.target.name]: e.target.value,
      })
   }
   const submitForm = () => {
      if (login.email === "" || login.password === "") {
         Swal.fire({
            text: "All the fields are required",
            icon: "warning",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
         })
      } else {
         props
            .logIn(login)
            .then((res) => {
               if (res.success) {
                  Swal.fire({
                     icon: "success",
                     title: "Welcome to MYtineraries",
                     showConfirmButton: false,
                     timer: 2500,
                     timerProgressBar: true,
                  })
               } else {
                  Swal.fire({
                     icon: "error",
                     text: "Username and/or password incorrect",
                     showConfirmButton: false,
                     timer: 2500,
                     timerProgressBar: true,
                  })
               }
            })
            .catch((err) => {
               console.log(err)
            })
      }
   }

   return (
      <>
         <Header />
         <section
            className="bg-image backSignUp d-flex justify-content-center align-items-center"
            style={{ backgroundImage: `url(${Back})` }}
         >
            <div className="container form-contain d-flex flex-column p-3">
               <h1 className="text-center text-white">Log In!</h1>
               <form className="row g-3 d-flex justify-content-center p-3">
                  <div className="col-md-7 form-contain">
                     <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={login.email}
                        placeholder="Email"
                        onChange={inputHandler}
                     ></input>
                  </div>
                  <div className="col-md-7">
                     <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={login.password}
                        placeholder="Password"
                        onChange={inputHandler}
                     ></input>
                  </div>
               </form>
               <div className="col-12 text-center">
                  <button
                     type="submit"
                     className="btn btn-success btn-lg px-2 mt-1"
                     onClick={submitForm}
                  >
                     Log In
                  </button>
               </div>
               <div className="col-12 text-center">
                  <h4 className="text-white pt-3">Don't have an account?</h4>
                  <Link to="/signup" className="text-white">
                     Sign Up here!
                  </Link>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

const mapDispatchToProps = {
   logIn: usersActions.logIn,
}

export default connect(null, mapDispatchToProps)(LogIn)
