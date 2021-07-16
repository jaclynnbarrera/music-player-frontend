import React from "react";

const Comments = (props) => {
  console.log("comments");
  return (
    <div>
      <p>COMMENTS</p>
      <div className="comments-box">
        {props.comments &&
          props.comments.map((comment, i) => <p key={i}>{comment.content}</p>)}
      </div>
    </div>
  );
};

export default Comments;
