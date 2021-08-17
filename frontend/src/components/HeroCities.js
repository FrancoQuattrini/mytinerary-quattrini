import React from "react"
import backgroundimg from "../assets/backCities.jpg"
import video from "../assets/earthIN.mp4"

class HeroCities extends React.Component {
   render() {
      return (
         <>
            <header id="headerCities" className="container d-none">
               <video className="videoB" autoPlay muted>
                  <source src={video} type="video/mp4"></source>
               </video>
               <div className="cities-header container px-4 px-lg-5">
                  <div className="row gx-4 gx-lg-5 align-items-center justify-content-center text-center">
                     <div className="col-lg-12">
                        <h1
                           id="titleLogo"
                           className="text-white font-weight-bold"
                        >
                           The world is yours !
                        </h1>
                     </div>
                  </div>
               </div>
            </header>
            <header
               id="header"
               className="masthead d-xl-none"
               style={{ backgroundImage: `url('${backgroundimg}')` }}
            >
               <div className="container px-4 px-lg-5">
                  <div className="row gx-4 gx-lg-5 align-items-center justify-content-center text-center">
                     <div className="col-lg-12 align-self-end pb-5">
                        <h1
                           id="titleLogo"
                           className="text-white font-weight-bold pt-5"
                        >
                           The
                        </h1>
                        <h1
                           id="titleLogo"
                           className="text-white font-weight-bold pt-5"
                        >
                           world
                        </h1>
                        <h1
                           id="titleLogo"
                           className="text-white font-weight-bold pt-5"
                        >
                           is yours!
                        </h1>
                     </div>
                  </div>
               </div>
            </header>
         </>
      )
   }
}

export default HeroCities
