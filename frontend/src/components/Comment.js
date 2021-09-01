const Comment = (props) => {
   const { comment, userId, _id } = props.comment
   return (
      <div>
         <h4>{comment}</h4>
      </div>
   )
}

export default Comment
