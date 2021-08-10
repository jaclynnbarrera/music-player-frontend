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
    //class function instead of action for store
    this.props.searchSong(this.state.searchTerm);
    this.setState({ redirect: true });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/search",
            state: { term: this.state.searchTerm },
          }}
        />
      );
    }
  };

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
        {this.renderRedirect()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { results: state.searchResults };
}

export default withRouter(connect(mapStateToProps, { searchSong })(Search));
