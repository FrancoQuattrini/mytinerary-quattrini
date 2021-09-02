import itinerariesActions from "../redux/actions/itinerariesActions"
import { connect } from "react-redux"
import Comment from "./Comment"
import { useState } from "react"
import toast from "react-hot-toast"

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
            .then((res) => setComments(res.response.comments))
         setInputComment({ comment: "" })
      }
   }

   const modifyComment = (comment, idComment) => {
      props
         .modifyComment(itinerary, comment, idComment)
         .then((res) => setComments(res.response.comments))
   }

   const deleteComment = (idComment) => {
      props.deleteComment(idComment).then((res) => console.log(res))
   }

   const pressEnter = (e) => {
      if (e.key === "enter") {
         sendComment()
      }
   }

   return (
      <div className="container-fluid">
         <h2 className="text-center">Comments</h2>
         <div className="bg-danger">
            <div className="container d-flex flex-column">
               {comments.length === 0 ? (
                  <div>
                     <p>No comments yet</p>
                  </div>
               ) : (
                  <div
                     style={{
                        overflowY: "scroll",
                        height: "60vh",
                     }}
                  >
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
               <div>
                  <input
                     className="inputComment"
                     type="text"
                     //  placeholder={input.inputcomment}
                     onKeyPress={pressEnter}
                     value={inputComment.comment}
                     //  disabled={input.disabled}
                     onChange={inputHandler}
                  />
                  <button onClick={sendComment}>SEND</button>
               </div>
            </div>
         </div>
      </div>
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
