import React from 'react'
// import Comment from './Comment'
import CommentsContainer from '../containers/CommentsContainer'

const Song = (props) => {
    console.log("song")

    const song = props.songs.find(song => song.id === parseInt(props.match.params.id))

    return (
        <div id={song.title.split(" ").join("")}>
            <img 
            src={song.image_link}
            ></img>
            <h2>{song.title}</h2>
            <h3>{song.artist}</h3>
            <p>{song.artist_about}</p>
            {/* <Comment song={song}/>             */}
            <CommentsContainer/>
        </div>        
    )
}

export default Song