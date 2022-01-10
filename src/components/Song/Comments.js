import "../../scss/Comments.scss";
import React, { useState } from "react";

const Comments = (props) => {
  const [commentsOpen, setCommentsOpen] = useState(false);

  const handleClick = () => {
    setCommentsOpen(!commentsOpen);
    console.log(commentsOpen);
  };

  return (
    <section className="comments-container">
      <div className="button">
        <p>ADD A COMMENT</p>
        <p>+</p>
      </div>
      <div className="button" onClick={handleClick}>
        <p>COMMENTS</p>
        <p>+</p>
        {/* maybe illu?? */}
      </div>

      <ul className="comments" hidden={!commentsOpen}>
        {props.comments &&
          props.comments.map((comment) => (
            <li key={comment.id}>"{comment.content}"</li>
          ))}
      </ul>
    </section>
  );
};

export default Comments;
