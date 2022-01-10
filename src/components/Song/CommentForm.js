import React from "react";
import addComment from "../../api/addComment";
// import addComment from "../api/addComment";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      songId: props.songId,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    addComment(this.state.content, this.state.songId);
    this.props.func();
    this.setState({ content: "" });
  }

  render() {
    return (
      <div className="comment">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Add a comment"
            onChange={this.handleChange.bind(this)}
            value={this.state.content}
            name="content"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CommentForm;
