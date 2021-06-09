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
        <div class="song-flex">
            <div class="media"><img className="single-image" src={song.image_link} alt="artist"></img><VideoEmbed video_link={song.video_link} /></div>
            <div class="info-comments">
                <div class="info">
                    <h1>{song.title.toUpperCase()}<br></br>{song.artist.toUpperCase()}</h1>
                    <p>{song.artist_about}</p></div>
                <div class="comments"><CommentsContainer song={song}/></div>
            </div>
        </div>    
    )
}

export default Song