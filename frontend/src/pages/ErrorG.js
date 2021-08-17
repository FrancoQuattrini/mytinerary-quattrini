import { Link } from "react-router-dom"
import img from "../assets/astro3.gif"

const ErrorG = () => {
   return (
      <div className="errorG container-fluid p-4 d-flex flex-column justify-content-center align-items-center">
         <h2 className="error col-11 mb-5">Sorry, an error has occurred.</h2>
         <img
            className="imgError404 col-12 col-md-5 pb-5"
            src={img}
            alt="imgError"
         ></img>
         <Link id="botonCTA" className="btn btn-light btn-xl" to="/">
            BACK TO HOME
         </Link>
      </div>
   )
}

export default ErrorG
