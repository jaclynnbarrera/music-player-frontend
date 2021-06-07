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

    // handleSubmit(e) {
    //     e.preventDefault()
    //     this.props.addComment(this.state.content, this.props.song_id)
    //     this.setState({content: ""})
    // }

    render(){
        console.log("form input")
        return (
            <div className="submit-form-container">
                {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
                <div className="submit-form">
                <form>
                    <h4>Submit A Song!</h4>
                    <label>Song Name: </label>
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.song} name="song"/>
                    <input type="submit"/>
                </form><br></br>
                </div>
            </div>
        )
    }
}

export default Submit