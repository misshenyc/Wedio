import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentEdit extends React.Component {
    constructor(props) {
        // debugger;
        super(props);
        this.state = this.props.comment
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToVideoShow = this.navigateToVideoShow.bind(this);
    }

    navigateToVideoShow() {
        const url = `/videos/${this.props.match.params.videoId}`
        this.props.history.push(url);
    }

    handleSubmit(e) {
        e.preventDefault();
        const videoId = parseInt(this.props.match.params.videoId);
        const comment = Object.assign({}, this.state, { video_id: videoId });
        this.props.editComment(comment);
        this.navigateToVideoShow();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        // debugger;
        return (
            <div className='comment-edit-form'>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        cols='80'
                        rows='10'
                        value={this.state.body}
                        onChange={this.update('body')}
                        placeholder = 'Update your comment'
                    />
                    <button type='submit'> Save </button>
                </form>
                <button onClick={this.navigateToVideoShow}>Cancel</button>
            </div>
        )
    }
}

export default withRouter(CommentEdit)