import React from 'react';
import { Redirect } from "react-router-dom";

class CreateVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.video
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        if (this.state.videoFile) {
            formData.append('video[videoclip]', this.state.videoFile);
        }
        // debugger;
        this.props.createVideo(formData)
            .then(()=>this.props.closeCreateModal())
            .then(this.setState({step: 2}))
    }

    //TODO: fix redirect after create video

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleFile(e){

        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({videoFile: file, videoUrl: fileReader.result, step: 1})
        }
        if(file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        if (this.props.created) {
            // return <Redirect to ='/users/video'></Redirect>
            // dispatch(this.closeCreateModal());
            // return null;
        }
        const preview = this.state.videoUrl ? <video src = {this.state.videoUrl} control= 'true'/> : null;
        
        switch (this.state.step) {
            case 0:
                return (
                    <div className = 'create-video-step1'>
                        <div className ='upload-header'> Upload Videos </div>
                        <i className="fas fa-cloud-upload-alt"></i>      
                        <h3>Drag and drop video files to upload</h3> 
                        <h4>Your videos will be private until you publish them.</h4>
                        <input className = 'select-files-btn' type="file" onChange={this.handleFile.bind(this)} />
                        <h5>By submitting your videos to YouTube, you acknowledge that you agree to YouTube's Terms of Service and Community Guidelines.</h5>
                        <h5>Please be sure not to violate others' copyright or privacy rights. Learn more</h5>
                    </div>
                );
            case 1:
                return (
                    <div className = 'create-video-step2'>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>
                                Title
                        <br />
                                <input
                                    type='text'
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                />
                            </label>
                            <br />
                            <label>
                                Description
                        <br />
                                <textarea
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                />
                            </label>
                            <br />

                            <h4> Video Preview </h4>
                            {preview}
                            <button type='submit'>Create Video</button>
                        </form>
                    </div>
                );
            case 2:
                return (
                    <Redirect to= 'users/video' />
                )
        }
    }
}

export default CreateVideo;