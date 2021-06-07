import React from 'react'

const Comments = (props) => {
    console.log("comments")
    return (
        <div className="comment-box">
            {props.comments && props.comments.map(comment => <p>{comment.content}</p>)}
        </div>        
    )
}

export default Comments
