import { Link } from "react-router-dom";
import React from "react";

export default function NavBar() {
  return (
    <div>
      <div>
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
          <div className="mixes-nav">
            {" "}
            <Link to="/search">SEARCH</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
