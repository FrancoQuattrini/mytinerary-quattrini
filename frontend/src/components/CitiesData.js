import React, { useState } from "react";
import CardCity from "./CardCity";
import imgSearch from "../assets/lupaMundo.png";
import { useEffect } from "react";
import axios from "axios";

// const cities = [
//     {name: "Buenos Aires", country: "Argentina", img: "https://i.postimg.cc/brLzWG49/Buenos-Aires.jpg", description: "Buenos Aires is Argentina’s big, cosmopolitan capital city. Its center is the Plaza de Mayo, lined with stately 19th-century buildings including Casa Rosada, the iconic, balconied presidential palace. Other major attractions include Teatro Colón, a grand 1908 opera house with nearly 2,500 seats, and the modern MALBA museum, displaying Latin American art."},
//     {name: "London", country: "England", img: "https://i.postimg.cc/XYtnR61m/London.jpg", description: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."},
//     {name: "Paris", country: "France", img: "https://i.postimg.cc/G3jhHN9T/Paris.jpg", description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré."},
//     {name: "Tokyo", country: "Japan", img: "https://i.postimg.cc/0y4N9wjt/Tokyo.jpg", description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum)."},
//     {name: "Cairo", country: "Egypt", img: "https://i.postimg.cc/tJcRyPn8/ElCairo.jpg", description: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views."},
//     {name: "Venice", country: "Italy", img: "https://i.postimg.cc/htvjFrDz/Venice.jpg", description: "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces. The central square, Piazza San Marco, contains St. Mark’s Basilica, which is tiled with Byzantine mosaics, and the Campanile bell tower offering views of the city’s red roofs."}
// ]

const CityData = () => {
   const [cities, setCities] = useState([]);
   useEffect(() => {
      axios.get("http://localhost:4000/api/cities").then((res) => setCities(res.data.response));
   }, []);
   const searchHandler = (e) => {
      const search = e.target.value;
      console.log(search);
   };

   return (
      <section className="page-section" id="about">
         <div className="container-fluid px-3 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
               <div className="col-12 text-center">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                     <h2 className="h2Cities">Find your destiny ↓</h2>
                     <img className="col-12 col-md-8" src={imgSearch} alt="imgSearch"></img>
                     <input
                        className="search col-6"
                        type="search"
                        placeholder="Search here"
                        onChange={searchHandler}
                     ></input>
                     <hr id="dividerCities" className="divider" />
                  </div>
                  <div>
                     {cities.map((data) => {
                        return <CardCity data={data} key={data.name} />;
                     })}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default CityData;
