import React from "react";

function SongCard(props) {
  return (
    <article key={props.song.id} className="song-card">
      <div className="img-container">
        <img src={props.song.image_link} alt={props.song.artist}></img>
      </div>
      <div className="card-body">
        <h3>{props.song.artist.toUpperCase()}</h3>
        <p>{props.song.title}</p>
        <p>
          {props.song.genres &&
            props.song.genres.map((g) => <li key={g.id}>{g.genre}</li>)}
        </p>
      </div>
    </article>
  );
}

export default SongCard;
