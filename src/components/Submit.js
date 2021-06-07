import React from 'react'
import { connect } from 'react-redux'
import submitSong from '../actions/submitSong'

class Submit extends React.Component {

    constructor(){
        super()
        this.state = {
            song: ""
        }
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.submitSong(this.state.song)
        this.setState({song: ""})
    }

    render(){
        console.log("song submit")
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}><br></br><br></br>
                    <label>Song Name: </label>
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.song} name="song"/><br></br><br></br>
                    <input type="submit"/>
                </form><br></br><br></br>
            </div>
        )
    }
}

export default connect(null, {submitSong})(Submit)