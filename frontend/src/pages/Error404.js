import { Link } from "react-router-dom";
import imgError404 from "../assets/error404.png";

const Error404 = () => {
   return (
      <div className="error404 d-flex flex-column justify-content-center align-items-center">
         <img className="imgError404" src={imgError404} alt="imgError"></img>
         <h2 id="error" className="mb-4">
            ERROR 404!
         </h2>
         <h2 id="error" className="mb-4">
            Page not found
         </h2>
         <hr className="divider divider-light" />
         <Link id="botonCTA" className="btn btn-light btn-xl" to="/">
            BACK TO HOME
         </Link>
      </div>
   );
};

export default Error404;
