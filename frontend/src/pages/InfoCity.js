import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroCity from "../components/HeroCity";

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
         <HeroCity></HeroCity>
         <h1>YO SOY INFO CITY</h1>
         <h2>{city.name}</h2>
         <Footer></Footer>
      </>
   );
};

export default InfoCity;
