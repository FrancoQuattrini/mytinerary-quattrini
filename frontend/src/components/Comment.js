import { useEffect, useState } from "react"
import { connect } from "react-redux"
import Swal from "sweetalert2"
import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from "react-icons/fa"

const Comment = (props) => {
   const { token, modifyComment, deleteComment } = props
   const { comment, userId, _id } = props.comment
   const [modifiedComment, setModifiedComment] = useState(comment)
   const [editComment, setEditComment] = useState(false)
   const [validUser, setValidUser] = useState(false)
   const [change, setChange] = useState(false)

   useEffect(() => {
      if (token && userId._id === props.id) {
         setValidUser(true)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const infoInput = (e) => {
      setModifiedComment(e.target.value)
   }

   const confirmationDelete = () => {
      Swal.fire({
         title: "Do you want to delete this comment?",
         showDenyButton: true,
         confirmButtonText: `Delete`,
         denyButtonText: `Back`,
      }).then((result) => {
         if (result.isConfirmed) {
            Swal.fire("Comment deleted!", "", "success").then(
               deleteComment(_id)
            )
         }
      })
   }

   const actionModify = () => {
      modifyComment(modifiedComment, _id)
      setEditComment(!editComment)
      setChange(!change)
   }

   const pressEnter = (e) => {
      if (e.key === "Enter") {
         actionModify()
      }
   }

   return (
      <div>
         <div className="container-fluid d-flex align-items-center">
            <div
               className="picComment"
               style={{
                  backgroundImage: `url('${userId.picture}')`,
               }}
            ></div>
            <h5 className="ps-3 pt-2">
               {userId.firstname + " "}
               {userId.lastname}
            </h5>
         </div>
         <div className="d-flex align-items-center">
            {!editComment ? (
               <div className="commentP container justify-content-start my-2">
                  <p className="comment">{comment}</p>
               </div>
            ) : (
               <div className="back-input backComment container my-2">
                  <input
                     type="text"
                     value={modifiedComment}
                     onChange={infoInput}
                     className="form-control inputComment"
                     onKeyPress={pressEnter}
                  ></input>
                  <FaCheckCircle
                     className="iconsComment2 text-white"
                     onClick={actionModify}
                  />
               </div>
            )}
            {validUser && (
               <>
                  <div>
                     {!editComment ? (
                        <FaEdit
                           onClick={() => setEditComment(!editComment)}
                           className="iconsComment"
                        />
                     ) : (
                        <FaTimesCircle
                           onClick={() => setEditComment(!editComment)}
                           className="iconsComment"
                        />
                     )}
                  </div>
                  <div>
                     <FaTrash
                        onClick={confirmationDelete}
                        className="iconsComment"
                     />
                  </div>
               </>
            )}
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      email: state.users.email,
      token: state.users.token,
      id: state.users.id,
   }
}

export default connect(mapStateToProps)(Comment)
