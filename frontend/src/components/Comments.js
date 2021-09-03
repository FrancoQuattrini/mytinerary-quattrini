import itinerariesActions from "../redux/actions/itinerariesActions"
import { connect } from "react-redux"
import Comment from "./Comment"
import { useState } from "react"
import toast from "react-hot-toast"
import { FaArrowCircleUp } from "react-icons/fa"

const Comments = (props) => {
   const { itinerary, token, comments, setComments } = props
   const [inputComment, setInputComment] = useState({ comment: "" })

   const inputHandler = (e) => {
      setInputComment({
         ...inputComment,
         comment: e.target.value,
      })
   }

   const sendComment = () => {
      if (!token) {
         toast.error("You must be logged in to post a comment")
      } else if (inputComment.comment === "") {
         toast.error("You can't post an empty comment")
      } else {
         props
            .postComment(itinerary, token, inputComment.comment)
            .then((res) => {
               setComments(res.response.comments)
            })
         setInputComment({ comment: "" })
      }
   }

   const modifyComment = (comment, idComment) => {
      props
         .modifyComment(itinerary, comment, idComment)
         .then((res) => setComments(res.response.comments))
   }

   const deleteComment = (idComment) => {
      props
         .deleteComment(itinerary, idComment)
         .then((res) => setComments(res.response.comments))
   }

   const pressEnter = (e) => {
      if (e.key === "Enter") {
         sendComment()
      }
   }

   return (
      <>
         <h2 className="text-center titlesIti">Comments</h2>
         <div>
            <div className="container-fluid viewMore d-flex flex-column">
               {comments.length === 0 ? (
                  <div>
                     <p className="noComments">
                        No comments yet. Be the first ↓
                     </p>
                  </div>
               ) : (
                  <div className="divComments">
                     {comments.map((comment) => {
                        return (
                           <Comment
                              comment={comment}
                              modifyComment={modifyComment}
                              deleteComment={deleteComment}
                              key={comment._id}
                           />
                        )
                     })}
                  </div>
               )}
               <div className="back-input my-4 send-msj">
                  <input
                     className="form-control"
                     type="text"
                     placeholder="Leave a message here..."
                     value={inputComment.comment}
                     onChange={inputHandler}
                     onKeyPress={pressEnter}
                  />
                  <FaArrowCircleUp
                     className="iconSendComment"
                     onClick={sendComment}
                  />
               </div>
            </div>
         </div>
      </>
   )
}

const mapStateToProps = (state) => {
   return {
      token: state.users.token,
   }
}

const mapDispatchToProps = {
   postComment: itinerariesActions.postComment,
   modifyComment: itinerariesActions.modifyComment,
   deleteComment: itinerariesActions.deleteComment,
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)
