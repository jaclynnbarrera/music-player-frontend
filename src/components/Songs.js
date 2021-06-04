import React from 'react'

const Songs = (props) => {
    console.log("songs")
    return (
        <div>
            {props.songs.map(song => <div id={song.title.split(" ").join("")}>
                <img src={song.image_link}></img>
                <h2>{song.title}</h2>
                <h3>{song.artist}</h3>
                {/* <Link to={`/songs/${song.id}`} ></Link> */}
            </div>)}
        </div>        
    )
}

export default Songs