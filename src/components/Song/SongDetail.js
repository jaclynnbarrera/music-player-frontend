import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../scss/SongDetail.scss";
// import CommentsContainer from "../containers/CommentsContainer";
// import VideoEmbed from "./VideoEmbed";

const SongDetails = () => {
  const params = useParams();
  const [song, setSong] = useState({
    isLoaded: false,
    data: {},
  });

  useEffect(() => {
    fetch(`https://calm-basin-04200.herokuapp.com/songs/${params.songId}`)
      .then((res) => res.json())
      .then((data) => {
        setSong({
          isLoaded: true,
          data: data,
        });
      })
      .catch((error) => console.log("error: ", error));
  }, [params.songId]);

  return (
    <article className="song-detail-container">
      <div className="layout">
        <div className="song song-video">
          <div class="video-wrap">
            <iframe
              width="960"
              height="540"
              src={song.isLoaded && song.data.video_link}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="song song-details">
          <p>{song.isLoaded && song.data.title.toUpperCase()}</p>
          <p>{song.isLoaded && song.data.artist.toUpperCase()}</p>
          <p>{song.isLoaded && song.data.artist_about.toUpperCase()}</p>
          {song.isLoaded &&
            song.data.genres &&
            song.data.genres.map((genre) => <li>{genre.genre}</li>)}
        </div>
      </div>
    </article>
  );
};

export default SongDetails;
