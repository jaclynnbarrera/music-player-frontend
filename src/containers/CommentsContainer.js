import React from 'react'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'

class CommentsContainer extends React.Component {
    render() {
        console.log("comments container")
        return (
            <div>
                <CommentInput />
                <Comments comments={this.props.song.comments} />
            </div>
        )
    }
}

export default CommentsContainer
