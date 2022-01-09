import React from "react";
// import Songs from "../components/Latest";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      isSubmitted: false,
      results: [],
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      isSubmitted: false,
      results: [],
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let results = this.props.songs.filter(
      (song) =>
        song.title
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    this.setState({ isSubmitted: true, results: results });
  }

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
        <div className="search">
          <div>
            {this.state.isSubmitted ? (
              <h1>Search Results for "{this.state.searchTerm}"</h1>
            ) : null}
          </div>
          <div>
            {/* <Songs songs={this.state.results} search={"search"} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
