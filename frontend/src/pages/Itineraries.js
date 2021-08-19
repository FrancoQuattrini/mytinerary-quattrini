import axios from "axios"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroItineraries from "../components/HeroItineraries"
import { Link } from "react-router-dom"
import Logo from "../assets/astroLoad.gif"
import Itinerary from "../components/Itinerary"

const Itineraries = (props) => {
   const [city, setCity] = useState({})
   const [itinerary, setItinerary] = useState({})
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      axios
         .get(`http://localhost:4000/api/city/${props.match.params.id}`)
         .then((res) => {
            if (res.data.success && res.data.response) {
               setCity(res.data.response)
               setLoading(false)
            } else {
               props.history.push("/error")
            }
         })
         .catch((err) => {
            console.log(err)
            props.history.push("/error")
         })

      axios
         .get(`http://localhost:4000/api/itineraries`)
         .then((res) => {
            if (res.data.success && res.data.response) {
               setItinerary(res.data.response)
               setLoading(false)
            }
         })
         .catch((err) => {
            console.log(err)
            props.history.push("/error")
         })
      //eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   if (loading) {
      return (
         <div className="container-fluid load-infoc d-flex flex-column justify-content-center align-items-center">
            <h2 className="loading text-center col-11">Loading</h2>
            <img className="col-12 col-md-6" src={Logo} alt="Loader"></img>
            <h2 className="loading text-center col-11">Please wait</h2>
         </div>
      )
   }
   return (
      <>
         <Header></Header>
         <HeroItineraries city={city}></HeroItineraries>

         <div className="underC container-fluid p-5 d-flex flex-column align-items-center justify-content-center">
            {itinerary.map((data) => {
               return <Itinerary data={data} key={data.nameUser} />
            })}

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
   )
}

export default Itineraries
