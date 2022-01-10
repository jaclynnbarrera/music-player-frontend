import "./../../scss/Genres.scss";
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
          genres: data.slice(0, 8),
        });
      })
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <section className="genres-container">
      <h1>EXPLORE GENRES</h1>
      <p>Browse music by your favorites genres or discover new favorites.</p>

      <div className="genres-grid">
        {genres.isLoaded &&
          genres.genres.map((item) => (
            <div className="genre" key={item.genre}>
              <p>{item.genre.toUpperCase()}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Genres;
