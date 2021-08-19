import languageImg from "../assets/language.png"
import localCurrency from "../assets/localCurrency.png"
import population from "../assets/population.png"

const HeroItineraries = (props) => {
   const {
      name,
      country,
      img2,
      language,
      flag,
      local_currency,
      estimated_population,
   } = props.city
   return (
      <>
         <div
            id="headerCity"
            className="city-hero container-fluid px-5"
            style={{ backgroundImage: `url('${img2}')` }}
         >
            <div className="row gx-4 gx-lg-5 align-items-center justify-content-center text-center">
               <div className="col-lg-12">
                  <h1 id="titleCity" className="text-white font-weight-bold">
                     {name}
                  </h1>
               </div>
            </div>
         </div>
         <div className="container-fluid">
            <div className="row p-5">
               <div className="col-12 col-lg-3 d-flex flex-column align-items-center justify-content-center pt-3">
                  <div className="d-flex align-items-center justify-content-center pb-3">
                     <div className="col-6 text-end">
                        <img
                           className="logo-city-info flag me-3"
                           src={flag}
                           alt="flag"
                        ></img>
                     </div>
                     <div className="col-6 text-start">
                        <h3 className="px-2">{country}</h3>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-3 d-flex flex-column align-items-center justify-content-center pt-3">
                  <div className="d-flex align-items-center justify-content-around pb-3">
                     <div className="col-6 text-end">
                        <img
                           className="logo-city-info me-3"
                           src={localCurrency}
                           alt="iconCurrency"
                        ></img>
                     </div>
                     <div className="col-6 text-start">
                        <h3 className="px-2">{local_currency}</h3>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-3 d-flex flex-column align-items-center justify-content-center pt-3">
                  <div className="col-12 d-flex align-items-center justify-content-center pb-3">
                     <div className="col-6 text-end">
                        <img
                           className="logo-city-info me-3"
                           src={languageImg}
                           alt="iconLanguage"
                        ></img>
                     </div>
                     <div className="col-6 text-start">
                        <h3 className="px-2">{language}</h3>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-lg-3 d-flex flex-column align-items-center justify-content-center pt-3">
                  <div className="col-12 d-flex align-items-center justify-content-center pb-3">
                     <div className="col-6 text-end">
                        <img
                           className="logo-city-info me-3"
                           src={population}
                           alt="iconPopulation"
                        ></img>
                     </div>
                     <div className="col-6 text-start">
                        <h3 className="px-2">{estimated_population}</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default HeroItineraries
