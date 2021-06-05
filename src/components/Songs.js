import React from 'react'
import {Link} from 'react-router-dom'
import Song from './Song'

const Songs = (props) => {
    console.log("songs")
    return (
        <div>
            {props.songs.map(song => <Song key={song.id} song={song}/>)}
        </div>        
    )
}

export default Songs