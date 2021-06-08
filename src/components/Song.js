import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'
import VideoEmbed from './VideoEmbed'

const Song = (props) => {
    console.log("song")

    const song = props.songs.find(song => song.id === parseInt(props.match.params.id))

    function handleDragStart(e) {
        e.preventDefault()


    }

    return (
        <div className="song">
            <img 
            draggable="true"
            className="single-image"
            src={song.image_link}
            alt="artist"
            onDragStart={(e) => handleDragStart(e)}
            ></img>
            <h1>{song.artist} - {song.title}</h1>
            <p>{song.artist_about}</p>
            <VideoEmbed video_link={song.video_link} />
            <CommentsContainer song={song}/>
        </div>        
    )
}

export default Song