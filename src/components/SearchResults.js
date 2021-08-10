import React from "react";
import Songs from "./Songs";

class SearchResults extends React.Component {
  render() {
    debugger;
    return (
      <div>
        <h3>Search results for "{this.props.location.state.term}"</h3>
        <div className="song">
          <Songs songs={this.props.location.state.results} />
        </div>
      </div>
    );
  }
}

export default SearchResults;
