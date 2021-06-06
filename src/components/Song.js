import React from 'react'
import CommentsContainer from '../containers/CommentsContainer'
import VideoEmbed from './VideoEmbed'

const Song = (props) => {
    console.log("song")

    const song = props.songs.find(song => song.id === parseInt(props.match.params.id))

    return (
        <div id={song.title.split(" ").join("")}>
            <img 
            src={song.image_link}
            alt="artist"
            ></img>
            <h2>{song.title}</h2>
            <h3>{song.artist}</h3>
            <p>{song.artist_about}</p>
            <VideoEmbed video_link={song.video_link} />
            <CommentsContainer song={song}/>
        </div>        
    )
}

export default Song
