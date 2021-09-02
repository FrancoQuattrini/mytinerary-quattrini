import { useEffect, useState } from "react"
import { connect } from "react-redux"
import Swal from "sweetalert2"

const Comment = (props) => {
   const { token, modifyComment, deleteComment } = props
   const { comment, userId, _id, email } = props.comment
   const [modifiedComment, setModifiedComment] = useState(comment)
   const [editComment, setEditComment] = useState(false)
   const [validUser, setValidUser] = useState(false)
   const [change, setChange] = useState(false)

   console.log(props)

   useEffect(() => {
      if (token && email === userId.email) {
         setValidUser(true)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const infoInput = (e) => {
      setModifiedComment(e.target.value)
   }

   const pressEnter = (e) => {
      if (e.key === "enter") {
         modifyComment(modifiedComment, _id)
         setEditComment(!editComment)
         setChange(!change)
      }
   }

   //    const confirmationDelete = () => {
   //       //   Swal.fire({
   //       //      title: "Do you want to delete the comment?",
   //       //      showDenyButton: true,
   //       //      confirmButtonText: `Delete`,
   //       //      denyButtonText: `Back`,
   //       //   }).then((result) => {
   //       //      if (result.isConfirmed) {
   //       //         Swal.fire("Comment deleted!", "", "success").then(
   //       //            deleteComment(_id)
   //       //         )
   //       //      }
   //       //   })
   //       Swal.fire({
   //          title: "Do you want to delete the comment?",
   //          showCancelButton: true,
   //          confirmButtonText: "Delete",
   //          cancelButtonText: "Back",
   //       }).then((res) => {
   //          if (res.value) {
   //             Swal.fire(
   //                "Comment deleted!",
   //                "Your comment has been deleted.",
   //                "success"
   //             ).then(deleteComment(_id))
   //          }
   //       })
   //    }

   return (
      <div>
         <div className="datosUSer d-flex align-items-center">
            <div
               className="logoUser picComment"
               style={{
                  backgroundImage: `url('${userId.picture}')`,
               }}
            ></div>
            <h3>
               {userId.lastname}
               {userId.firstname}
            </h3>
         </div>
         <div className="d-flex align-items-center">
            {!editComment ? (
               <div>
                  <p className="pe-3 py-2">{comment}</p>
               </div>
            ) : (
               <div>
                  <input
                     type="text"
                     value={modifiedComment}
                     onChange={infoInput}
                     onKeyDown={pressEnter}
                  ></input>
                  <button
                     onClick={() => {
                        modifyComment(modifiedComment, _id)
                        setEditComment(!editComment)
                        setChange(!change)
                     }}
                  >
                     OK
                  </button>
               </div>
            )}
            {validUser && (
               <>
                  <div>
                     <button onClick={() => setEditComment(!editComment)}>
                        EDIT
                     </button>
                  </div>
                  <div>
                     <button onClick={deleteComment(_id)}>DELETE</button>
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
   }
}

export default connect(mapStateToProps)(Comment)
