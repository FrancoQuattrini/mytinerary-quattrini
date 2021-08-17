import React from "react"

const Slide = ({ itemArray }) => {
   return (
      <div className="container-cities">
         {itemArray.map((city) => {
            if (!city.title) {
               return null
            }

            return (
               <div className="container-cities" key={city.id}>
                  <div
                     className="pictures"
                     style={{ backgroundImage: `url(${city.img})` }}
                  >
                     <h1 className="titleCities">{city.title}</h1>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default Slide
