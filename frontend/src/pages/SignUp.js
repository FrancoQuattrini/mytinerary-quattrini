import Header from "../components/Header"
import Footer from "../components/Footer"
import Back from "../assets/signup.jpg"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { connect } from "react-redux"
import usersActions from "../redux/actions/usersActions"
import GoogleLogin from "react-google-login"
import toast, { Toaster } from "react-hot-toast"
import { FaUser, FaRegImage } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import { ImKey } from "react-icons/im"
import { BiWorld } from "react-icons/bi"
import { BsEye, BsEyeSlash } from "react-icons/bs"

const SignUp = (props) => {
   const [countries, setCountries] = useState([])
   const [newUser, setNewUser] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      picture: "",
      country: "",
   })
   useEffect(() => {
      axios
         .get("https://restcountries.eu/rest/v2/all?fields=name")
         .then((res) => setCountries(res.data))
      return false
   }, [])

   const inputHandler = (e) => {
      setNewUser({
         ...newUser,
         [e.target.name]: e.target.value,
      })
   }

   const postUser = (newUser) => {
      props
         .postUser(newUser)
         .then((res) => {
            if (res.success) {
               Swal.fire({
                  icon: "success",
                  title: "Account created successfully",
                  showConfirmButton: false,
                  timer: 2500,
                  timerProgressBar: true,
               })
            } else if (res.errors) {
               res.errors.map((error) => {
                  return toast.error(error.message)
               })
            } else {
               Swal.fire({
                  icon: "error",
                  text: "There is already an account with this email",
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
      if (Object.values(newUser).some((value) => value === "")) {
         Swal.fire({
            text: "All the fields are required",
            icon: "warning",
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
         })
      } else {
         postUser(newUser)
      }
   }

   const responseGoogle = (res) => {
      let newUserGoogle = {
         firstname: res.profileObj.givenName,
         lastname: res.profileObj.familyName,
         email: res.profileObj.email,
         password: res.tokenId,
         picture: res.profileObj.imageUrl,
         country: "Narnia",
         google: true,
      }
      postUser(newUserGoogle)
   }

   const [eye, setEye] = useState(true)

   return (
      <>
         <Header />
         <div>
            <Toaster position="bottom-right" reverseOrder={false} />
         </div>
         <section
            className="bg-image backSignUp d-flex justify-content-center align-items-center"
            style={{ backgroundImage: `url(${Back})` }}
         >
            <div className="container p-3">
               <div className="col-12 col-md-6 form-contain">
                  <h1 className="text-center text-white sign mt-3">
                     Create Account!
                  </h1>

                  <form className="row g-3 d-flex justify-content-center p-3">
                     <div className="col-md-12">
                        <div className="back-input">
                           <FaUser className="iconsSign" />
                           <input
                              type="text"
                              className="form-control"
                              name="firstname"
                              value={newUser.firstname}
                              placeholder="FirstName"
                              onChange={inputHandler}
                              autoComplete="none"
                           ></input>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="back-input">
                           <FaUser className="iconsSign" />
                           <input
                              type="text"
                              className="form-control"
                              name="lastname"
                              value={newUser.lastname}
                              placeholder="LastName"
                              onChange={inputHandler}
                              autoComplete="none"
                           ></input>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="back-input">
                           <HiMail className="iconsSign" />
                           <input
                              type="email"
                              className="form-control"
                              name="email"
                              value={newUser.email}
                              placeholder="Email"
                              onChange={inputHandler}
                              autoComplete="none"
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
                              value={newUser.password}
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
                        <div className="form-text text-white ps-2">
                           You need a minimum of 6 characters.
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="back-input">
                           <FaRegImage className="iconsSign" />
                           <input
                              type="url"
                              className="form-control"
                              name="picture"
                              value={newUser.picture}
                              placeholder="URL picture profile"
                              onChange={inputHandler}
                              autoComplete="none"
                           ></input>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="back-input">
                           <BiWorld className="iconsSign me-2" />
                           <select
                              id="inputState"
                              name="country"
                              value={newUser.select}
                              className="form-select"
                              onChange={inputHandler}
                           >
                              <option defaultValue>Choose your country:</option>
                              {countries.map((country, index) => (
                                 <option value={country.name} key={index}>
                                    {country.name}
                                 </option>
                              ))}
                           </select>
                        </div>
                     </div>
                  </form>
                  <div className="text-center">
                     <button
                        type="submit"
                        className="btn submitBoton"
                        onClick={submitForm}
                     >
                        Sign Up
                     </button>
                  </div>
                  <h5 className="text-white text-center">Or</h5>
                  <div className="text-center">
                     <GoogleLogin
                        clientId="332293588539-2c447r49jfh9gupfj17mfm5nb3npcbj7.apps.googleusercontent.com"
                        buttonText="Sign Up with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                     />
                  </div>
                  <div className="col-12 text-center">
                     <h4 className="text-white pt-3">
                        Already have an account?
                     </h4>
                     <Link to="/login" className="text-white">
                        Log In here!
                     </Link>
                  </div>
               </div>
               <div className="col-md-6 mt-5 d-flex justify-content-end align-items-center">
                  <span></span>
               </div>
            </div>
         </section>
         <Footer />
      </>
   )
}

const mapDispatchToProps = {
   postUser: usersActions.postUser,
}

export default connect(null, mapDispatchToProps)(SignUp)
