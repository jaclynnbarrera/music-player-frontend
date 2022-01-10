import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../scss/SongDetail.scss";
import Comments from "./Comments";
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
          <div className="video-wrap">
            <iframe
              width="960"
              height="540"
              src={song.isLoaded ? song.data.video_link : undefined}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="song song-details">
          <p>{song.isLoaded && song.data.title.toUpperCase()}</p>
          <p>{song.isLoaded && song.data.artist.toUpperCase()}</p>
          <p>{song.isLoaded && song.data.artist_about}</p>
          <div className="card-genres">
            {song.isLoaded &&
              song.data.genres &&
              song.data.genres.map((genre) => (
                <li key={genre.id}>{genre.genre}</li>
              ))}
          </div>
          {song.isLoaded && song.data.comments ? (
            <Comments comments={song.data.comments} />
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default SongDetails;
