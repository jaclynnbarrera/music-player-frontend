import React from "react";
import { connect } from "react-redux";
import searchSong from "../actions/searchSong";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

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
        {this.state.isSubmitted && (
          <Redirect
            to={{
              pathname: "/search",
              results: this.props.results,
              searchTerm: this.state.searchTerm,
            }}
          />
        )}
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
