import React from 'react'
import {connect} from 'react-redux'
import fetchSongs from './actions/fetchSongs.js'
import songsReducer from './reducers/songsReducer.js'

class Songs extends React.Component {

    componentDidMount() {
        this.props.fetchSongs()
    }

    render() {

        console.log("songs render")
        return (
            <div className="songs-container">
                <p>All Songs</p>
                {this.props.songs.map(song => <div className={song.title}>{song.title} {song.artist} {song.artist_about}</div>)}         
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps")
    return {songs: state.songs}
}


export default connect(mapStateToProps, {fetchSongs})(Songs)