import verified from "../assets/verified.png"
import money from "../assets/money2.png"
import { useState } from "react"
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import Comments from "./Comments"
import toast, { Toaster } from "react-hot-toast"
import { FaRegStar, FaStar } from "react-icons/fa"
import Logo from "../assets/astroLoad.gif"

const Itinerary = (props) => {
   const [viewText, setViewText] = useState(false)
   const [activities, setActivities] = useState([])
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
      _id,
   } = props.data

   const [comments, setComments] = useState(props.data.comments)
   const [liked, setLiked] = useState(likes.includes(props.id))
   const [likesItineraries, setLikesItineraries] = useState(likes)

   const getActivities = () => {
      if (!viewText && activities.length === 0) {
         props
            .getActivities(_id)
            .then((res) => {
               if (res.success) {
                  setActivities(res.response)
               } else {
                  props.history.push("/error")
               }
            })
            .catch((err) => {
               console.log(err)
               props.history.push("/error")
            })
      }
      setViewText(!viewText)
   }

   const likeItinerary = () => {
      if (props.token) {
         props.like(_id, props.token).then((res) => {
            setLikesItineraries(res.response.likes)
            setLiked(!liked)
         })
      } else {
         toast.error("You must be logged in to like a post")
      }
   }

   return (
      <>
         <div>
            <Toaster position="bottom-right" reverseOrder={false} />
         </div>
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
                     <div className="blog-slider__code d-flex align-items-center justify-content-center">
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
                           <span className="blog-slider__code pe-3" key={index}>
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
                     {!liked ? (
                        <FaRegStar
                           className="like mt-3"
                           onClick={likeItinerary}
                        />
                     ) : (
                        <FaStar className="like mt-3" onClick={likeItinerary} />
                     )}
                     <span className="blog-slider__code liki">
                        {likesItineraries.length}
                     </span>
                  </div>
               </div>
               <div className="container col-12 flex-column align-items-center">
                  {viewText && (
                     <>
                        <h2 className="text-center titlesIti">Activities</h2>
                        {activities.length === 0 ? (
                           <div className="d-flex flex-column justify-content-center align-items-center">
                              <h2 className="loadingAct text-center col-11">
                                 Loading
                              </h2>
                              <img
                                 className="col-12 col-md-5"
                                 src={Logo}
                                 alt="Loader"
                              ></img>
                              <h2 className="loadingAct text-center col-11">
                                 Please wait
                              </h2>
                           </div>
                        ) : (
                           <div className="container-fluid viewMore">
                              {activities.map((activity, index) => {
                                 return (
                                    <div
                                       style={{
                                          backgroundImage: `url(${activity.img})`,
                                       }}
                                       key={index}
                                       className="activityImg text-center mb-4"
                                    >
                                       <h3 className="activityTitle">
                                          {activity.title}
                                       </h3>
                                    </div>
                                 )
                              })}
                           </div>
                        )}

                        <div className="container-fluid viewMore">
                           <Comments
                              itinerary={_id}
                              comments={comments}
                              setComments={setComments}
                           />
                        </div>
                     </>
                  )}

                  <button
                     className="blog-slider__button"
                     type="button"
                     onClick={getActivities}
                  >
                     {viewText ? "View Less" : "View More"}
                  </button>
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
                           <span className="blog-slider__code pe-3" key={index}>
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
                        {!liked ? (
                           <FaRegStar
                              className="like"
                              onClick={likeItinerary}
                           />
                        ) : (
                           <FaStar className="like" onClick={likeItinerary} />
                        )}
                        <span className="blog-slider__code pt-3 ps-2">
                           {likesItineraries.length}
                        </span>
                     </div>
                  </div>
               </div>
               <div className="container col-12 flex-column align-items-center">
                  <p></p>
                  {viewText && (
                     <>
                        <h2 className="text-center titlesIti">Activities</h2>
                        {activities.length === 0 ? (
                           <div className="d-flex flex-column justify-content-center align-items-center">
                              <h2 className="loadingAct text-center col-11">
                                 Loading
                              </h2>
                              <img
                                 className="col-12 col-md-5"
                                 src={Logo}
                                 alt="Loader"
                              ></img>
                              <h2 className="loadingAct text-center col-11">
                                 Please wait
                              </h2>
                           </div>
                        ) : (
                           <div className="container d-flex justify-content-between">
                              {activities.map((activity, index) => {
                                 return (
                                    <div
                                       style={{
                                          backgroundImage: `url(${activity.img})`,
                                       }}
                                       key={index}
                                       className="text-center activityImg2"
                                    >
                                       <h3 className="activityTitle">
                                          {activity.title}
                                       </h3>
                                    </div>
                                 )
                              })}
                           </div>
                        )}
                        <div className="container d-flex flex-column">
                           <Comments
                              itinerary={_id}
                              comments={comments}
                              setComments={setComments}
                           />
                        </div>
                     </>
                  )}
                  <button
                     className="blog-slider__button"
                     type="button"
                     onClick={getActivities}
                  >
                     {viewText ? "View Less" : "View More"}
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      token: state.users.token,
      id: state.users.id,
   }
}

const mapDispatchToProps = {
   getActivities: itinerariesActions.getActivities,
   like: itinerariesActions.like,
}

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary)
