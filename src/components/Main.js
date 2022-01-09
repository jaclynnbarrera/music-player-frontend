import React from "react";
// import fetchSongs from "../api/fetchSongs";
import Hero from "./Hero";
import Songs from "./Songs";
import Song from "./Song";
import Mixes from "./Mixes";
import { Route } from "react-router-dom";
import Search from "./Search";
import Genres from "./Genres";
import EditorPicks from "./EditorPicks";

class Main extends React.Component {
  render() {
    const featuredSongs =
      this.props.songs &&
      this.props.songs.slice(0, 12).map((s) => {
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
        {/* if on home page render editor picks and genres */}
        <Hero song={this.props.songs} />
        <Genres />
        {/* if on home page render editor picks and genres */}
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

export default Main;
