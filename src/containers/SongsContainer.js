import React from 'react'
import Songs from '../components/Songs'
import { connect } from 'react-redux'
import fetchSongs from '../actions/fetchSongs.js'


class SongsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchSongs()
    }

    render(){
        console.log("songs container")
        return (
            <div id="songs-container">
                <Songs songs={this.props.songs} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('songs container mapstatetoprops')
    return {songs: state.songs}
}

export default connect(mapStateToProps, {fetchSongs})(SongsContainer)