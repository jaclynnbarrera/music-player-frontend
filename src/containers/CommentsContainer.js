import React from 'react'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'

class CommentsContainer extends React.Component {
    
    render() {
        console.log("comments container")
        return (
            <div>
                <Comments comments={this.props.song.comments} />
                <CommentInput song_id={this.props.song} />
            </div>
        )
    }
}

export default CommentsContainer
