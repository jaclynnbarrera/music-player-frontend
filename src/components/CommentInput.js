import React from "react";
import { connect } from "react-redux";
import addComment from "../actions/addComment";

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state.content, this.props.song_id);
    this.setState({ content: "" });
  }

  render() {
    console.log("comment input");
    return (
      <div className="comment">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
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

export default connect(null, { addComment })(CommentInput);
