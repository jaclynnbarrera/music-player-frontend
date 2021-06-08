import React from 'react'

const Comments = (props) => {
    console.log("comments")
    return (
        <div className="comment-box">
            {props.comments && props.comments.map(comment => <li>{comment.content}</li>)}
        </div>        
    )
}

export default Comments
