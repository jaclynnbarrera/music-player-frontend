import React from "react";

const Comments = (props) => {
  console.log("comments");

  // const date = props.comments[1]["created_at"].split("-")[2].split("T")[0];
  // const month = props.comments[1]["created_at"].split("-")[1];
  // const year = props.comments[1]["created_at"].split("-")[1];
  return (
    <div>
      <p>
        <b>{props.comments.length} COMMENTS</b>
      </p>
      <div className="comments-box">
        {props.comments &&
          props.comments.map((comment, i) => (
            <p key={i}>
              <em>
                {comment.created_at.split("-")[1]}/
                {comment.created_at.split("-")[2].split("T")[0]}/
                {comment.created_at.split("-")[0]}
              </em>
              <br></br>
              {comment.content}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Comments;
