import React from 'react'

const Song = (props) => {
    console.log("song")

    const song = props.songs.find(song => song.id === parseInt(props.match.params.id))

    function handleClick(song) {
        console.log("CLICKED")
    }

    return (
        <div>
            {song && song.title}
        </div>
        // <div id={props.song.title.split(" ").join("")}>
        //     <img 
        //     src={props.song.image_link}
        //     onClick={() => handleClick(props.song)}
        //     ></img>
        //     <h2>{props.song.title}</h2>
        //     <h3>{props.song.artist}</h3>            
        // </div>        
    )
}

export default Song