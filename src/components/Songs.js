import React from 'react'
import {Link} from 'react-router-dom'

const Songs = (props) => {

    console.log("songs")
    return (
        <div className="songs">
            {props.songs.map(song => 
            <div 
            key={song.id} 
            className={song.title.split(" ").join("")}>
            <Link to={`/songs/${song.id}`}><img src={song.image_link} alt="artist"></img></Link>
            </div>
            )}
        </div>        
    )
}

export default Songs
