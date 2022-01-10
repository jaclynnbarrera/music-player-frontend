import "../../scss/Comments.scss";
import React, { useState } from "react";
import CommentForm from "./CommentForm";

const Comments = (props) => {
  const [commentsOpen, setCommentsOpen] = useState(false);

  const handleClick = () => {
    setCommentsOpen(!commentsOpen);
  };

  return (
    <section className="comments-container">
      <div className="add-comment">
        <p>ADD A COMMENT</p>
        <CommentForm songId={props.songId} func={props.func} />
      </div>
      <div className="button" onClick={handleClick}>
        <p>COMMENTS</p>
        <p>+</p>
        {/* maybe illu?? */}
      </div>

      <ul className="comments" hidden={!commentsOpen}>
        {props.comments &&
          props.comments.map((comment) => (
            <li key={comment.id}>{comment.content}</li>
          ))}
      </ul>
    </section>
  );
};

export default Comments;
