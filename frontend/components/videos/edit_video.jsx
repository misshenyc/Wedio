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
                <form onSubmit={this.handleSubmit}>
                    <div className = 'edit-video-title'>
                        Title
                        <br/>
                        <input
                            type='text'
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder = 'Add a title that describes your video'
                        />
                    </div>
                    <br />
                    <div className = 'edit-video-description'>
                        Description
                        <br />
                        <input
                            type = 'text'
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder = 'Tell viewers about your video'
                        />
                    </div>
                    <br />
                    <button>Save</button>
                    <br />
                </form>
                    <button onClick = {()=>this.props.deleteVideo(this.props.video.id)}>Delete</button>
            </div>
        );
    }
}

export default EditVideo;
