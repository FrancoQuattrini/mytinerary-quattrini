import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroCities from "../components/HeroCities"
import CitiesData from "../components/CitiesData"

const Cities = (props) => {
   return (
      <>
         <Header />
         <HeroCities />
         <CitiesData {...props} />
         <Footer />
      </>
   )
}

export default Cities
