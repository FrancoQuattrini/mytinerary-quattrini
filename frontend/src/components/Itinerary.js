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
      <>
         <div className="blog-slider">
            <div className="blog-slider__wrp swiper-wrapper">
               <div className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                     <img src={img} alt="aaaa"></img>
                  </div>
                  <div className="blog-slider__content">
                     <div className="blog-slider__title">PEPE TOTO</div>
                     <span className="blog-slider__code">
                        San Isidro and Delta del Tigre tour
                     </span>
                     <span className="blog-slider__code">#AAAA #BBB #CCC</span>
                     <div className="blog-slider__text">
                        The historic city of San Isidro and the picturesque
                        wetlands of the Delta del Tigre lie just north of Buenos
                        Aires. On this visit, take the scenic route as you
                        navigate the Rio de la Plata and the Tigre Delta,
                        explore the city of Tigre, and then return to the city
                        by minibus, stopping in San Isidro along the way.
                     </div>
                     <span className="blog-slider__code">PRICE</span>
                     <span className="blog-slider__code">DURATION</span>
                     <span className="blog-slider__code">LANGUAGES</span>
                     <span className="blog-slider__code">LIKE</span>
                     <a href="#" className="blog-slider__button">
                        VIEW MORE
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div className="container py-4">
            <div className="card mb-3">
               <div className="row no-gutters">
                  <div className="col-md-4">
                     <img
                        src={img}
                        className="img-fluid rounded-start p-1"
                        alt="imgaa"
                     ></img>
                  </div>
                  <div className="col-12 col-md-8">
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
                        <div className="card-title d-flex">
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
                           {Array(price)
                              .fill(price)
                              .map((price, index) => {
                                 return (
                                    <img
                                       src={money}
                                       alt="money"
                                       className="money"
                                       key={index}
                                    />
                                 )
                              })}
                        </h5>
                        <h5 className="card-title ">Duration: {duration} hs</h5>
                        <div className="d-flex container">
                           <div className="">
                              <h5>Languages:</h5>
                           </div>
                           <div className="container">
                              {languages.map((language, index) => (
                                 <p
                                    className="card-title text-muted ps-3"
                                    key={index}
                                 >
                                    {language}.
                                 </p>
                              ))}
                           </div>
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
                  <p></p>
                  {viewText && (
                     <div>
                        <div className="container col-12">
                           <img
                              className="col-12 col-md-6"
                              src={UnderConstruction}
                              alt="UnderConstruction"
                           ></img>
                        </div>
                     </div>
                  )}
                  <button
                     className="btn btn-primary"
                     type="button"
                     onClick={() => setViewText(!viewText)}
                  >
                     {viewText ? "View Less" : "View More"}
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Itinerary
