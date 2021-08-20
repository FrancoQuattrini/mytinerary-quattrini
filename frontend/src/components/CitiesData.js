// import React, { useState } from "react"
import CardCity from "./CardCity"
import imgSearch from "../assets/lupaMundo.png"
import notFoundimg from "../assets/notFound.png"
import { Link } from "react-router-dom"
// import Logo from "../assets/astroLoad.gif"
import { useEffect } from "react"
import { connect } from "react-redux"
import citiesActions from "../redux/actions/citiesActions"

const CitiesData = (props) => {
   useEffect(() => {
      props.getCities()
   }, [])
   // const [cities, setCities] = useState([])
   // const [loading, setLoading] = useState(true)
   // const [citiesSearch, setCitiesSearch] = useState([])

   // useEffect(() => {
   //    axios
   //       .get("http://localhost:4000/api/cities")
   //       .then((res) => {
   //          if (res.data.success) {
   //             setCities(res.data.response)
   //             setCitiesSearch(res.data.response)
   //             setLoading(false)
   //          } else {
   //             props.history.push("/error")
   //          }
   //       })
   //       .catch((err) => {
   //          console.log(err)
   //          props.history.push("/error")
   //       })
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [])

   // if (loading) {
   //    return (
   //       <div className="container load d-flex flex-column justify-content-center align-items-center p-5">
   //          <h2 className="loading text-center col-11 p-3">Loading</h2>
   //          <img className="col-12 col-md-6" src={Logo} alt="Loader"></img>
   //          <h2 className="loading text-center col-11 p-3">Please wait</h2>
   //       </div>
   //    )
   // }

   const searchHandler = (e) => {
      props.filterCities(e.target.value)
   }

   return (
      <section className="page-section" id="about">
         <div className="container px-3 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
               <div className="col-12 text-center">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                     <h2 className="h2Cities">Find your destination ↓</h2>
                     <img
                        className="col-12 col-md-7"
                        src={imgSearch}
                        alt="imgSearch"
                     ></img>
                     <input
                        className="search col-12 col-md-6"
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
            {props.citiesSearch.length === 0 ? (
               <div className="container d-flex flex-column align-items-center justify-content-center">
                  <h2 className="h2Search col-12 col-md-9 text-center">
                     Sorry, it seems that what you are looking for cannot be
                     found.
                  </h2>
                  <img className="imgNF" src={notFoundimg} alt="notFound"></img>
                  <h2 className="searchB col-12 col-md-9 text-center">
                     Try another please...
                  </h2>
               </div>
            ) : (
               props.citiesSearch.map((city) => {
                  return <CardCity city={city} key={city.name} />
               })
            )}
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
   )
}

const mapStateToProps = (state) => {
   return {
      citiesSearch: state.cities.citiesSearch,
   }
}

const mapDispatchToProps = {
   getCities: citiesActions.getCities,
   filterCities: citiesActions.filterCities,
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesData)
