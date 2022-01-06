import { Link } from "react-router-dom";
import React from "react";
import search from "../images/search.png";
import logo from "../images/logo.png";
import "../scss/NavBar.scss"

export default function NavBar() {
  return (
    <nav>
      <ul className="nav-container">
        <li>LOGO</li>
        <li>
          <Link to="/">RADIO 135</Link>
        </li>
        <li>
          <Link to="/songs">SONGS</Link>
        </li>
        <li>
          <Link to="/mixes">MIXES</Link>
        </li>
        <li className="search">
          <Link to="/search">
            SEARCH <img src={search} alt="search-icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
