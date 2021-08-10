// import {Link} from 'react-router-dom'
import React from "react";

export default function Footer() {
  const date = Date.now();
  const today = new Date(date);

  return (
    <div className="footer-container">
      <p>
        how are you today? | it is {today.toDateString()} | the time is{" "}
        {today.getHours()}:{today.getMinutes()} | radio 135 is an online
        independent radio station where you can discover curated songs and
        curated mixes {":)"}
      </p>
    </div>
  );
}
