import React from "react";
import CommentsContainer from "../containers/CommentsContainer";
import VideoEmbed from "./VideoEmbed";

const Song = (props) => {
  console.log("song");

  const song = props.songs.find(
    (song) => song.id === parseInt(props.match.params.id)
  );

  return (
    <div className="song-flex">
      <div className="media">
        <img
          className="single-image"
          src={song && song.image_link}
          alt="artist"
        ></img>
        <VideoEmbed video_link={song && song.video_link} />
      </div>
      <div className="info-comments">
        <div className="info">
          <h1>
            {song && song.title.toUpperCase()}
            <br></br>
            {song && song.artist.toUpperCase()}
          </h1>
          {song && song.categories.map((c, i) => <li key={i}>{c}</li>)}
          <p>{song && song.artist_about}</p>
        </div>
        <div className="comments">
          {song && <CommentsContainer song={song} />}
        </div>
      </div>
    </div>
  );
};

export default Song;
