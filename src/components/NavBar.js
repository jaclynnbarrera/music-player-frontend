import { Link } from "react-router-dom";
import React from "react";
import SearchInput from "./SearchInput";
import { Route } from "react-router-dom";
import SearchResults from "./SearchResults";

export default function NavBar() {
  return (
    <div>
      <div>
        <h4 className="headline">RADIO 135 RADIO 135 RADIO 135 RADIO 135</h4>
        <div className="navbar-container">
          <div className="home">
            <Link to="/">HOME</Link>
          </div>
          <div className="song-nav">
            {" "}
            <Link to="/songs">SONGS</Link>
          </div>
          <div className="mixes-nav">
            {" "}
            <Link to="/mixes">MIXES</Link>
          </div>
          <Route exact path="/search">
            <SearchInput />
          </Route>
        </div>
      </div>
    </div>
  );
}
