import React from "react";
import searchSong from "../actions/searchSong";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      redirect: false,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, isSubmitted: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchSong(this.state.searchTerm);
    this.setState({ redirect: true });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/search",
            state: { term: this.state.searchTerm, results: this.props.results },
          }}
        />
      );
    }
  };

  render() {
    return (
      <div className="search-bar">
        <h1>Search</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Search by song or artist"
            onChange={this.handleChange.bind(this)}
            value={this.state.searchTerm}
            name="searchTerm"
          ></input>
        </form>
        {this.renderRedirect()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { results: state.searchResults };
}

export default withRouter(connect(mapStateToProps, { searchSong })(Search));
