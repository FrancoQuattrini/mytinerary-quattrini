import React, { useState } from "react";
import CardCity from "./CardCity";
import imgSearch from "../assets/lupaMundo.png";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CityData = () => {
   const [cities, setCities] = useState([]);
   const [citiesSearch, setCitiesSearch] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:4000/api/cities").then((res) => {
         setCities(res.data.response);
         setCitiesSearch(res.data.response);
      });
   }, []);

   const searchHandler = (e) => {
      const citiesFilter = cities.filter((city) =>
         city.name.toLowerCase().startsWith(e.target.value.toLowerCase().trim())
      );
      setCitiesSearch(citiesFilter);
   };

   return (
      <section className="page-section" id="about">
         <div className="container px-3 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
               <div className="col-12 text-center">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                     <h2 className="h2Cities">Find your destiny ↓</h2>
                     <img
                        className="col-12 col-md-8"
                        src={imgSearch}
                        alt="imgSearch"
                     ></img>
                     <input
                        className="search col-6"
                        type="search"
                        placeholder="Search here ..."
                        onChange={searchHandler}
                     ></input>
                     <hr id="dividerCities" className="divider" />
                  </div>
               </div>
            </div>
         </div>
         <div className="backCard p-2 pt-5">
            {citiesSearch.map((city) => {
               return <CardCity city={city} key={city.name} />;
            })}
         </div>
         <div className="d-flex mt-5 justify-content-center align-items-center">
            <Link
               id="botonCTA"
               className="btn btn-light btn-xl"
               to="/"
               onClick={() => window.scrollTo(0, 0)}
            >
               Back to Home
            </Link>
         </div>
      </section>
   );
};

export default CityData;
