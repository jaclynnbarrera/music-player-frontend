import React from "react";
import { Link } from "react-router-dom";

function SongCard(props) {
  return (
    <Link to={`/tracks/${props.song.id}`}>
      <article key={props.song.id} className="song-card">
        <div className="img-container">
          <img src={props.song.image_link} alt={props.song.artist}></img>
        </div>
        <div className="card-body">
          <h3>{props.song.artist.toUpperCase()}</h3>
          <p>{props.song.title}</p>

          <div className="card-genres">
            {props.song.genres &&
              props.song.genres.map((g) => <li key={g.id}>{g.genre}</li>)}
          </div>
        </div>
      </article>
    </Link>
  );
}

export default SongCard;
