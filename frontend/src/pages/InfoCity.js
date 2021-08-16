import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroInfoCity from "../components/HeroInfoCity";
import { Link } from "react-router-dom";
import UnderConstruction from "../assets/UnderConstruction.jpg";

const InfoCity = (props) => {
   const [city, setCity] = useState({});
   useEffect(() => {
      axios
         .get(`http://localhost:4000/api/city/${props.match.params.id}`)
         .then((res) => setCity(res.data.response));
      //eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <>
         <Header></Header>
         <HeroInfoCity city={city}></HeroInfoCity>
         <div className="underC container-fluid p-5 d-flex flex-column align-items-center justify-content-center">
            <img
               className="col-12 col-md-6"
               src={UnderConstruction}
               alt="UnderConstruction"
            ></img>
            <Link
               id="botonCTA"
               className="btn btn-light btn-xl mt-5"
               to="/cities"
               onClick={() => window.scrollTo(0, 0)}
            >
               Back To Cities
            </Link>
         </div>
         <Footer></Footer>
      </>
   );
};

export default InfoCity;
