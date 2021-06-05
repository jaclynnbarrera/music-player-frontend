import React from 'react'

const Comments = (props) => {
    console.log("comments")
    return (
        <div>
            {props.comments && props.comments.map(comment => comment.content)}
        </div>        
    )
}

export default Comments