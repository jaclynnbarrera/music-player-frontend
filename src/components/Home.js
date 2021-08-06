import React from "react";
import { connect } from "react-redux";
import fetchSongs from "../actions/fetchSongs";
import DailyPickContainer from "../containers/DailyPickContainer";
import Songs from "./Songs";
import Song from "./Song";
import Mixes from "./Mixes";
import { Route } from "react-router-dom";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    const featuredSongs =
      this.props.songs &&
      this.props.songs.slice(0, 8).map((s) => {
        return s;
      });

    let mixes = [];
    mixes =
      this.props.songs &&
      this.props.songs.filter((song) => song.categories.includes("dj-set"));

    let songs = [];
    songs =
      this.props.songs &&
      this.props.songs.filter((song) => !song.categories.includes("dj-set"));

    return (
      <div>
        <Route exact path="/">
          <DailyPickContainer song={this.props.songs} />
          <h3 id="featured">FEATURED</h3>
          <Songs songs={featuredSongs} />
        </Route>

        <Route exact path="/songs">
          <Songs songs={songs} />
        </Route>

        <Route exact path="/mixes">
          <Mixes mixes={mixes} />
        </Route>

        <Route
          exact
          path="/songs/:id"
          render={(routerProps) => (
            <Song songs={this.props.songs} {...routerProps} />
          )}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { fetchSongs })(Home);
