import React from 'react'
import Songs from '../components/Songs'
import { connect } from 'react-redux'
import songsReducer from '../reducers/songsReducer.js'
import fetchSongs from '../actions/fetchSongs.js'


class SongsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchSongs()
    }

    render(){
        console.log("songs container")
        return (
            <div>
                Songs Container
                <Songs />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('songs container mapstatetoprops')
    return {songs: state.songs}
}

export default connect(mapStateToProps, {fetchSongs})(SongsContainer) 