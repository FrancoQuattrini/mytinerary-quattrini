import itinerariesActions from "../redux/actions/itinerariesActions"
import { connect } from "react-redux"
import Comment from "./Comment"

const Comments = (props) => {
   const { itinerary, token, comments, setComments } = props
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
                  <div>
                     {comments.map((comment) => {
                        return <Comment comment={comment} key={comment._id} />
                     })}
                  </div>
               )}
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
   //    deleteComment: itinerariesActions.deleteComment,
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)

// updatedComment={updatedComment} deleteComment={deleteComment}
