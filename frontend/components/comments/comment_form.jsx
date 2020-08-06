import React from 'react';
import {withRouter} from 'react-router-dom';

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: '',
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
        const comment = Object.assign({}, this.state, {video_id: videoId});
        this.props.createComment(comment);
        this.navigateToVideoShow();
    }

    update(field){
        return e => this.setState({[field]:e.currentTarget.value});
    }

    render(){
        return(
            <div className = 'comment-form-container'>
                <form className='comment-form' onSubmit = {this.handleSubmit}>
                    <div className = 'img-entry'>
                        <img id='profile' src={window.profile} />
                        <textarea
                            value = {this.state.body}
                            onChange = {this.update('body')}
                            placeholder= 'Add a public comment'
                            className = 'comment-entry'
                        />
                    </div>
                    <button className = 'comment' type = 'submit'> COMMENT</button>
                </form>
                <button className = 'cancel' onClick = {this.navigateToVideoShow}>CANCEL</button>
            </div>
        )
    }
}

export default withRouter(CommentForm)