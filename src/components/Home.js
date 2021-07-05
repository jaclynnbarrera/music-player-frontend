import React from "react";
import { connect } from "react-redux";
import fetchSongs from "../actions/fetchSongs";
import DailyPickContainer from "../containers/DailyPickContainer";
import Songs from "./Songs";
import { Route } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const featuredSongs = this.props.songs.slice(0, 8).map((s) => {
      return s;
    });
    return (
      <div>
        <Route exact path="/">
          <DailyPickContainer song={this.props.songs} />
          <h3 id="featured">FEATURED</h3>
          <Songs songs={featuredSongs} />
        </Route>

        <Route exact path="/songs">
          <Songs songs={this.props.songs} />
        </Route>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { fetchSongs })(Home);
