import React from 'react';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comments/comment_form_container'
import { CommentLink } from '../../util/link_util';
import { ProtectedRoute } from '../../util/route_util';
import CommentIndex from '../comments/comment_index';
import CommentShow from '../comments/comment_show';
import CommentIndexContainer from '../comments/comment_index_container'
import CommentForm from '../comments/comment_form'

class VideoShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const { video, likeVideo, unlikeVideo, dislikeVideo, undislikeVideo } = this.props;
        
        if (!video) return null;

        let likeText = 'I like this'
        let likeAction = () => likeVideo(video.id);
        if (video.liked_by_current_user) {
            likeText = 'Unlike';
            likeAction = () => unlikeVideo(video.id);
        }
        
        let dislikeText = 'I dislike this'
        let dislikeAction = () => dislikeVideo(video.id);
        if (video.disliked_by_current_user) {
            dislikeText = 'Undo dislike';
            dislikeAction = () => undislikeVideo(video.id);
        }

        const commentList = (comments = []) => {
            return comments.map(comment => <CommentShow 
                comment = {comment}
                key = {comment.id}
            />)
        }
        
        return (
            <div className = 'video-show'>
                <video src={video.clipUrl} controls/>
                <br/>
                <span className = 'show-video-title'>{video.title}</span>
                <span className = 'show-video-description'>{video.description}</span>
                <br/>
                <br/>
                <button onClick = {likeAction}>{likeText}</button>
                <div className = 'video-likes-count'>{video.likes}</div>
                <br/>
                <button onClick = {dislikeAction}>{dislikeText}</button>
                <div className = 'video-dislikes-count'>{video.dislikes}</div>

                <CommentLink
                    component={CommentFormContainer}
                    to={`/videos/${video.id}/review`}
                    label="Add a public comment"
                />
                <ProtectedRoute
                    path="/videos/:videoId/review"
                    component={CommentFormContainer}
                />

                {/* <div className = 'add-comment'>
                    <CommentForm/>
                </div> */}

                <div className = 'show-comment'>
                    <h3> Comments </h3>
                    {commentList(Object.values(video.comments))}
                </div>


            </div>
        );
    }
}

export default VideoShow;
