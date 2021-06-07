import React from 'react'

class Submit extends React.Component {

    constructor(){
        super()
        this.state = {
            content: ""
        }
    }

    // handleChange(e){
    //     this.setState({[e.target.name]: e.target.value})
    // }

    // handleSubmit(e) {
    //     e.preventDefault()
    //     this.props.addComment(this.state.content, this.props.song_id)
    //     this.setState({content: ""})
    // }

    render(){
        console.log("comment input")
        return (
            <div>
                {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
                <form>
                    <label>Submit A Song: </label>
                    {/* <input type="text" onChange={this.handleChange.bind(this)} value={this.state.content} name="content"/> */}
                    <input type="text" name="content"/>

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Submit