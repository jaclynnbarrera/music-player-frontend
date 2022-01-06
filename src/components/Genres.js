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
        <div class="genres-grid">
          <div class="row">
            <div class="column">
              <div class="orange-column">Some Text in Column One</div>
            </div>

            <div class="column">
              <div class="blue-column">Some Text in Column Two</div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div class="orange-column">Some Text in Column One</div>
            </div>

            <div class="column">
              <div class="blue-column">Some Text in Column Two</div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div class="orange-column">Some Text in Column One</div>
            </div>

            <div class="column">
              <div class="blue-column">Some Text in Column Two</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Genres;
