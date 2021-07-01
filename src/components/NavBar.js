import { Link } from "react-router-dom";
import React from "react";
import SearchInput from "./SearchInput";

export default function NavBar() {
  const date = Date.now();
  const today = new Date(date);

  return (
    <div>
      <div>
        <h4 className="headline">RADIO 135 RADIO 135 RADIO 135</h4>
        <div className="navbar-container">
          <div className="home">
            <Link to="/">HOME</Link>
          </div>
          {/* <div className="date">
            TODAY IS {today.toDateString()} | {today.getHours()}:
            {today.getMinutes()}
          </div> */}
          <div className="song-nav">
            {" "}
            <Link to="/songs">TRACKS</Link>
          </div>
          <div className="playlists">PLAYLISTS</div>
          <div className="playlists">SHOP</div>
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
