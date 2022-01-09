import "../scss/Genres.scss";
import React, { useState, useEffect } from "react";

const Genres = () => {
  const [genres, setGenres] = useState({
    isLoaded: false,
    genres: [],
  });

  useEffect(() => {
    fetch("https://calm-basin-04200.herokuapp.com/genres")
      .then((res) => res.json())
      .then((data) => {
        setGenres({
          isLoaded: true,
          genres: data,
        });
      })
      .catch((error) => console.log("error: ", error));
  });

  return (
    <section class="genres-container">
      <div className="left-column">
        <h1>Explore Genres</h1>
        <p>Browse music by your favorites genres or discover new favorites.</p>
      </div>
      <div className="right-column">
        <div className="genres-grid">
          {genres.isLoaded &&
            genres.genres.map((item) => (
              <div className="genre" key={item.genre}>
                {item.genre.toUpperCase()}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Genres;
