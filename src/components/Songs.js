import React from 'react'
import {Link} from 'react-router-dom'

const Songs = (props) => {
    console.log("songs")
    return (
        <div>
            {props.songs.map(song =>
                <div id={song.title.split(" ").join("")} key={song.id}>
                <Link to={`/songs/${song.id}`} ><img src={song.image_link}></img></Link>
                <h2>{song.title}</h2>
                <h3>{song.artist}</h3>
            </div>)}
        </div>        
    )
}

export default Songs