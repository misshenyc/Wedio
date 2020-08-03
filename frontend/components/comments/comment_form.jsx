import React from 'react';
import {withRouter} from 'react-router-dom';

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToVideoShow = this.navigateToVideoShow.bind(this);
    }

    navigateToVideoShow(){
        const url =  `/videos/${this.props.match.params.videoId}`
        this.props.history.push(url);
    }

    handleSubmit(e){
        e.preventDefault();
        const videoId = parseInt(this.props.match.params.videoId);
        const comment = Object.assign({}, this.state, {videoId: videoId});
        this.props.createComment(comment);
        this.navigateToVideoShow;
    }

    update(field){
        return e => this.setState({[field]:e.currentTarget.value});
    }

    render(){
        return(
            <div className = 'comment-form'>
                <form onSubmit = {this.handleSubmit}>
                    <label> Leave a comment</label>  
                    <textarea
                        cols = '80'
                        rows = '10'
                        value = {this.state.body}
                        onChange = {this.update('body')}
                    />
                    <button> Submit </button>
                </form>
                <button onClick = {this.navigateToVideoShow}>Cancel</button>
            </div>
        )
    }
}

export default CommentForm