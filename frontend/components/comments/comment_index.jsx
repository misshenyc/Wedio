import React from 'react';

class CommentIndex extends React.Component {

    componentDidMount(){
        debugger
        this.props.fetchComments();
    }
    
    render(){
        debugger
        const commentLis = this.props.comments.map(comment => {
            return (
                <li key = {comment.id}>
                    {comment.body} by {comment.user.id}
                </li>
            )
        })
        debugger
        return (
            <div>
                {commentLis}
            </div>
        )
    }
}

export default CommentIndex;