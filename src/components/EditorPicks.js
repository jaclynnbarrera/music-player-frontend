import "../scss/EditorPicks.scss";
import React from "react";

const EditorPicks = () => {
  return (
    <section className="editor-picks-container">
      <h1>EDITOR PICKS</h1>
      <div className="songs-grid">
        <div className="song-card">
          <div className="img-container">j</div>
          <p>ONE</p>
        </div>
        <div className="song-card">TWO</div>
        <div className="song-card">THREE</div>
        <div className="song-card">FOUR</div>
        <div className="song-card">FIVE</div>
        <div className="song-card">SIX</div>
        <div className="song-card">SEVEN</div>
        <div className="song-card">EIGHT</div>
        <div className="song-card">NINE</div>
        <div className="song-card">TEN</div>
        <div className="song-card">ELEVEN</div>
        <div className="song-card">TWELVE</div>
      </div>
    </section>
  );
};

export default EditorPicks;
