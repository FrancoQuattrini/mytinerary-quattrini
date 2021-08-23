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
         <div className="blog-slider mb-5 d-lg-none d-xl-none d-xxl-none">
            <div className="blog-slider__wrp swiper-wrapper">
               <div className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                     <img src={img} alt="aaaa"></img>
                  </div>
                  <div className="blog-slider__content">
                     <img
                        src={imgUser}
                        className="imgUser mb-4"
                        alt="imgUser"
                     ></img>
                     <div className="blog-slider__code">
                        <span className="models nameUser">{nameUser}</span>

                        <img
                           src={verified}
                           className="verified ms-3"
                           alt="imgVerified"
                        ></img>
                     </div>

                     <span className="blog-slider__title">{title}</span>
                     <span className="blog-slider__code my-4">
                        {hashtags.map((hashtag, index) => (
                           <span className="blog-slider__code pe-3">
                              {hashtag}
                           </span>
                        ))}
                     </span>
                     <div className="blog-slider__text">{description}</div>
                     <span className="blog-slider__code">
                        <span className="models pe-1">Price:</span>
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
                     </span>
                     <span className="blog-slider__code">
                        <span className="models pe-3">Duration:</span>
                        {duration} hs
                     </span>
                     <span className="blog-slider__code">
                        <span className="models">Languages:</span>
                        {languages.map((language, index) => (
                           <p className="card-title mt-2" key={index}>
                              {language}.
                           </p>
                        ))}
                     </span>
                     <img src={like} className="like mt-3" alt="imgLike"></img>
                     <span className="blog-slider__code">{likes}</span>
                     <div className="container col-12 flex-column align-items-center">
                        <p></p>
                        {viewText && (
                           <div>
                              <div className="container col-12">
                                 <img
                                    className="col-12 col-md-6 mb-5"
                                    src={UnderConstruction}
                                    alt="UnderConstruction"
                                 ></img>
                              </div>
                           </div>
                        )}
                        <button
                           className="blog-slider__button"
                           type="button"
                           onClick={() => setViewText(!viewText)}
                        >
                           {viewText ? "View Less" : "View More"}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="blog-slider mb-5 d-none d-lg-block">
            <div className="blog-slider__wrp swiper-wrapper">
               <div className="blog-slider__item swiper-slide">
                  <div className="blog-slider__img">
                     <img src={img} alt="aaaa"></img>
                  </div>
                  <div className="blog-slider__content">
                     <div className="blog-slider__code d-flex justify-content-center align-items-center my-3">
                        <img
                           src={imgUser}
                           className="imgUser me-5"
                           alt="imgUser"
                        ></img>
                        <span className="models nameUser">{nameUser}</span>
                        <img
                           src={verified}
                           className="verified ms-3"
                           alt="imgVerified"
                        ></img>
                     </div>
                     <span className="blog-slider__title">{title}</span>
                     <span className="blog-slider__code my-4 d-flex">
                        {hashtags.map((hashtag, index) => (
                           <span className="blog-slider__code pe-3">
                              {hashtag}
                           </span>
                        ))}
                     </span>
                     <div className="blog-slider__text">{description}</div>
                     <span className="blog-slider__code">
                        <span className="models pe-1">Price:</span>
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
                     </span>
                     <span className="blog-slider__code">
                        <span className="models pe-3">Duration:</span>
                        {duration} hs
                     </span>
                     <span className="blog-slider__code d-flex align-items-center">
                        <span className="models pe-3">Languages:</span>
                        {languages.map((language, index) => (
                           <p className="card-title mt-2 me-3" key={index}>
                              {language}.
                           </p>
                        ))}
                     </span>
                     <div className="blog-slider__code d-flex justify-content-center align-items-center my-3">
                        <img src={like} className="like" alt="imgLike"></img>
                        <span className="blog-slider__code pt-3 ps-2">
                           {likes}
                        </span>
                     </div>
                     <div className="container col-12 flex-column align-items-center">
                        <p></p>
                        {viewText && (
                           <div>
                              <div className="container col-12">
                                 <img
                                    className="col-12 col-md-6 mb-5"
                                    src={UnderConstruction}
                                    alt="UnderConstruction"
                                 ></img>
                              </div>
                           </div>
                        )}
                        <button
                           className="blog-slider__button"
                           type="button"
                           onClick={() => setViewText(!viewText)}
                        >
                           {viewText ? "View Less" : "View More"}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Itinerary
