import verified from "../assets/verified.png"
import UnderConstruction from "../assets/UnderConstruction.jpg"
import like from "../assets/like.png"
import money from "../assets/money2.png"
import { useState } from "react"

const Itinerary = (props) => {
   const [viewText, setViewText] = useState(false)
   const {
      nameUser,
      imgUser,
      price,
      duration,
      likes,
      title,
      description,
      img,
      hashtags,
      languages,
   } = props.data
   return (
      <div className="container py-4">
         <div className="card mb-3">
            <div className="row g-0">
               <div className="col-md-4">
                  <img
                     src={img}
                     className="img-fluid rounded-start"
                     alt="imgaa"
                  ></img>
               </div>
               <div className="col-md-8">
                  <div className="card-body p-5">
                     <div className="d-flex align-items-center">
                        <img
                           src={imgUser}
                           className="imgUser me-5"
                           alt="imgUser"
                        ></img>
                        <div className="d-flex align-items-center">
                           <h2 className="card-title pe-3">{nameUser}</h2>
                           <img
                              src={verified}
                              className="verified"
                              alt="imgVerified"
                           ></img>
                        </div>
                     </div>
                     <h3 className="card-title pt-4">{title}</h3>
                     <div className="d-flex">
                        {hashtags.map((hashtag, index) => (
                           <h5
                              className="card-title text-muted pe-3"
                              key={index}
                           >
                              {hashtag}
                           </h5>
                        ))}
                     </div>
                     <p className="card-text">{description}</p>

                     <h5 className="card-title ">
                        Price:
                        {Array(price).fill(
                           <img src={money} alt="money" className="money" />
                        )}
                     </h5>
                     <h5 className="card-title ">Duration: {duration} hs</h5>
                     <div className="">
                        <h5 className="card-title d-flex">
                           Languages:
                           {languages.map((language, index) => (
                              <p
                                 className="card-title text-muted ps-3"
                                 key={index}
                              >
                                 {language}.
                              </p>
                           ))}
                        </h5>
                     </div>

                     <div className="d-flex pt-3 align-items-center justify-content-center">
                        <img
                           src={like}
                           className="like pe-1"
                           alt="imgLike"
                        ></img>
                        <h5 className="card-title pt-2">{likes}</h5>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container col-12 flex-column align-items-center">
               <p>
                  <button
                     className="btn btn-primary"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#collapseExample"
                     aria-expanded="false"
                     aria-controls="collapseExample"
                     onClick={() => setViewText(!viewText)}
                  >
                     {viewText ? "View Less" : "View More"}
                  </button>
               </p>
               <div className="collapse" id="collapseExample">
                  <div className="container col-12">
                     <img
                        className="col-12 col-md-6"
                        src={UnderConstruction}
                        alt="UnderConstruction"
                     ></img>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Itinerary
