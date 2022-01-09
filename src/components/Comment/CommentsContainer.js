import React from "react";
import CommentInput from "./CommentInput";
import Comments from "./Comments";

class CommentsContainer extends React.Component {
  render() {
    console.log("comments container");
    return (
      <div>
        <Comments comments={this.props.song.comments} />
        <CommentInput song_id={this.props.song.id} />
      </div>
    );
  }
}

export default CommentsContainer;
