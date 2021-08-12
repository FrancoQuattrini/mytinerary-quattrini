import React from "react";
import logo from "../assets/citiesIcon2.png";
import backgroundimg from "../assets/backCities.jpg";

class HeroCity extends React.Component {
   render() {
      return (
         <header
            id="header"
            className="masthead"
            style={{ backgroundImage: `url('${backgroundimg}')` }}
         >
            <div className="container px-4 px-lg-5 h-100">
               <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                  <div className="col-lg-12 align-self-end pb-5">
                     <img className="logo" src={logo} alt="logo"></img>
                     <h1 id="titleLogo" className="text-white font-weight-bold pt-5">
                        The world is yours!
                     </h1>
                  </div>
               </div>
            </div>
         </header>
      );
   }
}

export default HeroCity;
