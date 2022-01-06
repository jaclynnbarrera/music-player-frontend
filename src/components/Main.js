import React from "react";
import { connect } from "react-redux";
import fetchSongs from "../actions/fetchSongs";
import Hero from "./Hero";
import Songs from "./Songs";
import Song from "./Song";
import Mixes from "./Mixes";
import { Route } from "react-router-dom";
import Search from "./Search";
import Genres from "./Genres";
import EditorPicks from "./EditorPicks";

class Main extends React.Component {
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
        <Hero song={this.props.songs} />
        <Genres />
        <EditorPicks />
        {/* <Route exact path="/">
          <div>
            <h3>EDITOR PICKS</h3>
          </div>
          <Songs songs={featuredSongs} />
        </Route>

        <Route exact path="/songs">
          <Songs songs={songs} />
        </Route>

        <Route exact path="/search">
          <Search songs={this.props.songs} />
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
        /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { fetchSongs })(Main);
