import React from "react";
import searchSong from "../actions/searchSong";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class SearchInput extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      isSubmitted: false,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, isSubmitted: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchSong(this.state.searchTerm);
    this.setState({ isSubmitted: true });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            onChange={this.handleChange.bind(this)}
            value={this.state.searchTerm}
            name="searchTerm"
          ></input>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { results: state.searchResults };
}

export default withRouter(
  connect(mapStateToProps, { searchSong })(SearchInput)
);
