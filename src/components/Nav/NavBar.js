import "./../../scss/NavBar.scss";
import { NavLink } from "react-router-dom";
import React from "react";
import search from "./../../images/search.png";

export default function NavBar() {
  const date = Date.now();
  const today = new Date(date);

  return (
    <header>
      <nav>
        <ul className="nav-container">
          <li>LOGO</li>
          <li>
            <NavLink activeClassName="active" to="/">
              RADIO 135
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/latest">
              LATEST
            </NavLink>
          </li>

          <li className="search">
            <NavLink to="/explore">
              EXPLORE <img src={search} alt="search-icon" />
            </NavLink>
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
    </header>
  );
}
