import React from 'react';
import CommentFormContainer from '../comments/comment_form_container'
import CommentLink from '../../util/link_util';
import EditVideoContainer from '../videos/edit_video_container';
import VideoEditLink from '../../util/link_util'
import { ProtectedRoute } from '../../util/route_util';
import CommentShow from '../comments/comment_show';

class VideoShow extends React.Component {
    
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const { 
            video, 
            likeVideo, 
            unlikeVideo, 
            dislikeVideo, 
            undislikeVideo,
            deleteComment,
            history } = this.props;
        
        if (!video) return null;

        let likeText = 'LIKE'
        let likeAction = () => likeVideo(video.id);
        if (video.liked_by_current_user) {
            likeText = 'UNDO';
            likeAction = () => unlikeVideo(video.id);
        }
        
        let dislikeText = 'DISLIKE'
        let dislikeAction = () => dislikeVideo(video.id);
        if (video.disliked_by_current_user) {
            dislikeText = 'UNDO';
            dislikeAction = () => undislikeVideo(video.id);
        }

        const commentList = (comments, deleteComment) => {
            if (!comments) return;
            return Object.values(comments).map(comment => 
                <CommentShow 
                    comment = {comment}
                    key = {comment.id}
                    deleteComment = {deleteComment}
                    videoId = {video.id}
                    history = {history}
                />)
        }
        
        return (
            <div className = 'video-show'>
                <video className = 'show-video-clip' src={video.clipUrl} controls/>
                <span className = 'show-video-title'>{video.title}</span>
                <section className = 'show-video-details'>
                    <div className = 'details-left'> 7,018,210 views • Jan 1, 2020 </div>
                    <div className = 'details-right'>
                        <button className='detail'onClick={likeAction}>
                            <span>{likeText}</span>
                            <i className="far fa-thumbs-up"></i>
                            <span>{video.likes}</span>
                        </button>               
                        <button className='detail' onClick={dislikeAction}>
                            <span>{dislikeText}</span>
                            <i className="far fa-thumbs-down"></i>
                            <span>{video.dislikes}</span>
                        </button>
                        <div className = 'detail'> 
                            <i className="fas fa-share"></i> 
                            <p> SHARE </p>
                        </div>
                        <div className='detail'>
                            <i className="far fa-edit"></i>
                            <VideoEditLink
                                component={EditVideoContainer}
                                to={`/videos/${video.id}/edit`}
                                label="EDIT"
                            />
                            {/* <ProtectedRoute
                                exact path="/videos/:videoId/comment"
                                component={CommentFormContainer}
                            /> */}
                        </div>
                    </div>
                </section>


                <CommentLink
                    component={CommentFormContainer}
                    to={`/videos/${video.id}/comment`}
                    label="Add a public comment"
                />
                <ProtectedRoute
                    exact path="/videos/:videoId/comment"
                    component={CommentFormContainer}
                />
                <div className = 'show-comment'>
                    <h3> Comments </h3>
                    {commentList(video.comments, deleteComment)}
                </div>
            </div>
        );
    }
}

export default VideoShow;
