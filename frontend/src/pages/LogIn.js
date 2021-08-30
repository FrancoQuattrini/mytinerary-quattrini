import Header from "../components/Header"
import Footer from "../components/Footer"
import Back from "../assets/login.jpg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { connect } from "react-redux"
import usersActions from "../redux/actions/usersActions"
import Swal from "sweetalert2"
import GoogleLogin from "react-google-login"
import { HiMail } from "react-icons/hi"
import { ImKey } from "react-icons/im"
import { BsEye, BsEyeSlash } from "react-icons/bs"

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

   const logIn = (login) => {
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
         logIn(login)
      }
   }

   const responseGoogle = (res) => {
      let userLoginGoogle = {
         email: res.profileObj.email,
         password: res.tokenId,
      }
      logIn(userLoginGoogle)
   }

   const [eye, setEye] = useState(true)

   return (
      <>
         <Header />
         <section
            className="bg-image backSignUp d-flex justify-content-center align-items-center"
            style={{ backgroundImage: `url(${Back})` }}
         >
            <div className="container p-3">
               <div className="col-md-6 mt-2 d-flex me-5 justify-content-end align-items-center">
                  <span></span>
               </div>
               <div className="col-12 col-md-6 form-contain2 align-self-center mt-5 me-5">
                  <h1 className="text-center text-white sign">Welcome back!</h1>
                  <form className="row g-3 d-flex justify-content-center p-3">
                     <div className="col-md-12">
                        <div className="back-input">
                           <HiMail className="iconsSign" />
                           <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={login.email}
                              placeholder="Email"
                              onChange={inputHandler}
                           ></input>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="back-input">
                           <ImKey className="iconsSign" />
                           <input
                              type={eye ? "password" : "text"}
                              className="form-control"
                              name="password"
                              value={login.password}
                              placeholder="Password"
                              onChange={inputHandler}
                              autoComplete="none"
                           ></input>
                           <div onClick={() => setEye(!eye)} className="pe-4">
                              {eye ? (
                                 <BsEyeSlash className="iconsSign" />
                              ) : (
                                 <BsEye className="iconsSign" />
                              )}
                           </div>
                        </div>
                     </div>
                  </form>
                  <div className="text-center">
                     <button
                        type="submit"
                        className="btn submitBoton"
                        onClick={submitForm}
                     >
                        Log In
                     </button>
                  </div>
                  <h5 className="text-white text-center">Or</h5>
                  <div className="text-center">
                     <GoogleLogin
                        clientId="332293588539-2c447r49jfh9gupfj17mfm5nb3npcbj7.apps.googleusercontent.com"
                        buttonText="Log In with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                     />
                  </div>
                  <div className="col-12 text-center">
                     <div className="col-12 text-center">
                        <h4 className="text-white pt-3">
                           Don't have an account?
                        </h4>
                        <Link to="/signup" className="text-white">
                           Sign Up here!
                        </Link>
                     </div>
                  </div>
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
