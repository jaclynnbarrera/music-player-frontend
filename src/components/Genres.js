import "../scss/Genres.scss";
import React from "react";

const Genres = () => {
  return (
    <section class="genres-container">
      <div className="left-column">
        <h1>Explore Genres</h1>
        <p>Browse music by your favorites genres or discover new favorites.</p>
      </div>
      <div className="right-column">
        <div className="genres-grid">
          <div className="genre">ONE</div>
          <div className="genre">ONE</div>
          <div className="genre">ONE</div>
          <div className="genre">ONE</div>
          <div className="genre">ONE</div>
          <div className="genre">ONE</div>
          <div className="genre">ONE</div>
          <div className="genre">ONE</div>
        </div>
      </div>
    </section>
  );
};

export default Genres;
