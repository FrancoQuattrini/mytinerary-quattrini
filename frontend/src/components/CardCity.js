import React from "react"
import Flippy, { FrontSide, BackSide } from "react-flippy"
import { Link } from "react-router-dom"
import { useRef } from "react"

const CardCity = (props) => {
   const { _id, name, country, img, description } = props.city
   const ref = useRef()
   return (
      <div className="container mb-5">
         <Link
            to={`/infocity/${_id}`}
            style={{ textDecoration: "none" }}
            onClick={() => window.scrollTo(0, 0)}
         >
            <Flippy
               className="flippy"
               flipOnHover={true}
               flipOnClick={false}
               flipDirection="vertical"
               ref={ref}
            >
               <FrontSide
                  style={{
                     backgroundImage: `url(${img})`,
                     backgroundPosition: "bottom",
                     backgroundSize: "cover",
                  }}
               >
                  <h1 className="titleCard text-center">{name}</h1>
                  <h2 className="titleCard text-center">{country}</h2>
               </FrontSide>
               <BackSide
                  style={{
                     backgroundImage: `url(${img})`,
                     backgroundSize: "cover",
                  }}
               >
                  <div className="container-fluid description1">
                     <h2 className="description text-center">{description}</h2>
                  </div>
               </BackSide>
            </Flippy>
         </Link>
      </div>
   )
}

export default CardCity
