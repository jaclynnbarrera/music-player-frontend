import React from 'react'
import {connect} from 'react-redux'
import fetchSongs from './actions/fetchSongs.js'

class Songs extends React.Component {

    componentDidMount() {
        this.props.fetchSongs()
    }

    render() {
        console.log("songs render")
        return (
            console.log("songs")
        )
    }
}

export default connect(null, {fetchSongs})(Songs)

