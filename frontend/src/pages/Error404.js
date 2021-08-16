import { Link } from "react-router-dom";
import img from "../assets/astronaut.gif";

const Error404 = () => {
   return (
      <div className="error404 container-fluid p-5 d-flex flex-column justify-content-center align-items-center">
         <h2 className="error col-12">ERROR 404</h2>
         <h2 className="error2 col-12">Page not found!</h2>
         <img
            className="imgError404 col-12 col-md-5"
            src={img}
            alt="imgError"
         ></img>
         <Link id="botonCTA" className="btn btn-light btn-xl" to="/">
            BACK TO HOME
         </Link>
      </div>
   );
};

export default Error404;
