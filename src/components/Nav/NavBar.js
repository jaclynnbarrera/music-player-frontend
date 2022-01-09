import "./../../scss/NavBar.scss";
import { Link } from "react-router-dom";
import React from "react";
import search from "./../../images/search.png";

export default function NavBar() {
  const date = Date.now();
  const today = new Date(date);

  return (
    <div>
      <nav>
        <ul className="nav-container">
          <li>LOGO</li>
          <li>
            <Link to="/">RADIO 135</Link>
          </li>
          <li>
            <Link to="/latest">LATEST</Link>
          </li>

          <li className="search">
            <Link to="/explore">
              EXPLORE <img src={search} alt="search-icon" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="scroll-container">
        <p>
          how are you today? | it is {today.toDateString()} | the time is{" "}
          {today.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}{" "}
          | radio 135 is an online independent radio station where you can
          discover curated songs and mixes
        </p>
      </div>
    </div>
  );
}
