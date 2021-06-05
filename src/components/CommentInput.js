import React from 'react'
import { connect } from 'react-redux'


class CommentInput extends React.Component {

    constructor(){
        super()
        this.state = {comment: ""}
    }

    handleChange(e){
        this.setState({comment: e.target.value})
    }

    render(){
        console.log("comment input")
        return (
            <div>
                <form>
                    <label>Comment: </label>
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.comment} name="comment"/>
                </form>
            </div>
        )
    }
}

export default connect(null)(CommentInput)


// render() {
// 	return (
// 		...form onSubmit={...