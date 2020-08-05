import React from 'react';


class EditVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.video;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateVideo(this.state).then(()=> {
            return this.props.history.push(`/videos/${this.props.video.id}`)});
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <div className = 'edit-video'>
                <h3>Edit Video Details</h3>
                <form className ='edit-video-form' onSubmit={this.handleSubmit}>
                    <div className = 'edit-title-container'>
                        <span>Title</span>
                        <input
                            className = 'edit-title'
                            type='text'
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder = 'Add a title that describes your video'
                        />
                    </div>
                    <div className = 'edit-description-container'>
                        <span>Description </span>
                        <input
                            className='edit-description'
                            type = 'text'
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder = 'Tell viewers about your video'
                        />
                    </div>
                    <button>Save</button>
                </form>
                <button onClick={
                    () => this.props.deleteVideo(this.props.video.id)
                    .then(()=>this.props.history.push(`/users/video`))
                    }>Delete</button>
                <video className='edit-video-clip' src={this.state.clipUrl} controls />
            </div>
        );
    }
}

export default EditVideo;
