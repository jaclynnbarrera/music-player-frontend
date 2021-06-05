import React from 'react'

const Song = (props) => {
    console.log("song")
    return (
        <div id={props.song.title.split(" ").join("")}>
            <img src={props.song.image_link}></img>
            <h2>{props.song.title}</h2>
            <h3>{props.song.artist}</h3>            
        </div>        
    )
}

export default Song