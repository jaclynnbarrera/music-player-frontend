import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import CommentsContainer from "../containers/CommentsContainer";
// import VideoEmbed from "./VideoEmbed";

const SongDetails = () => {
  const params = useParams();

  const [song, setSong] = useState({});

  useEffect(() => {
    fetch(`https://calm-basin-04200.herokuapp.com/songs/${params.songId}`)
      .then((res) => res.json())
      .then((data) => {
        setSong(data);
      })
      .catch((error) => console.log("error: ", error));
  }, []);

  console.log(song);

  return (
    <div className="song-flex">
      Song Details Page
      {/* <div className="media">
        <img
          className="single-image"
          src={song && song.image_link}
          alt="artist"
        ></img>
        <VideoEmbed video_link={song && song.video_link} song={song} />
      </div>
      <div className="info-comments">
        <div className="info">
          <h1>
            {song && song.title.toUpperCase()}
            <br></br>
            {song && song.artist.toUpperCase()}
          </h1>
          <p id="genres">{song && song.artist_about}</p>
        </div>
        <div className="genres">
          {song && song.categories.map((c, i) => <p key={i}>{c}</p>)}
        </div>
        <div className="comments">
          {song && <CommentsContainer song={song} />}
        </div>
      </div> */}
    </div>
  );
};

export default SongDetails;
