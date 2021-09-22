import React from "react";

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <h3>Search results for "{this.props.location.state.term}"</h3>

        {this.props.location.state.results.map((song) => (
          <div className="search">
            <img src={song.image_link}></img>
            <h3>
              {song.title} - {song.artist}
            </h3>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
