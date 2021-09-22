import React from "react";

export default function Footer() {
  const date = Date.now();
  const today = new Date(date);

  return (
    <div className="footer-container">
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
  );
}
