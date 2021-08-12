import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { Link } from "react-router-dom";

class CardCity extends React.Component {
   render() {
      const { id, name, country, img, description } = this.props.data;
      return (
         <div className="container my-5">
            <Link to={`/infoCity/${id}`}>
               <Flippy
                  className="flippy"
                  flipOnHover={true}
                  flipOnClick={false}
                  flipDirection="vertical"
                  ref={(r) => (this.flippy = r)}
               >
                  <FrontSide
                     style={{
                        backgroundImage: `url(${img})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                     }}
                  >
                     <h1 className="titleCard">{name}</h1>
                     <h2 className="titleCard">{country}</h2>
                  </FrontSide>
                  <BackSide
                     style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                     }}
                  >
                     <div className="container-fluid">
                        <h2 className="description">{description}</h2>
                     </div>
                  </BackSide>
               </Flippy>
            </Link>
         </div>
      );
   }
}

export default CardCity;

// const CardCity = ({data}) => {
//     const {name, country, img, description} = data
//     return (
//         <h2>{name}</h2>
//     )
// }
