import React, { Component } from 'react'

class CommentList extends Component {
    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span>
                </div>&nbsp;:&nbsp;
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default CommentList