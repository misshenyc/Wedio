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
        formData.append('video[lat]', this.state.lat);
        formData.append('video[lng]', this.state.lng);
        if (this.state.videoFile) {
            formData.append('video[videoclip]', this.state.videoFile);
        }
        this.props.createVideo(formData)
            .then(()=>this.props.closeCreateModal())
            .then(this.setState({step: 2}))
    }

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
        const preview = this.state.videoUrl ? <video 
            className = 'preview' 
            src = {this.state.videoUrl} 
            control= 'true'/> : null;
        
        switch (this.state.step) {
            case 0:
                return (
                    <div className = 'create-video-step1'>
                        <div className ='upload-header'> Upload Videos </div>
                        <i className="fas fa-arrow-circle-up fa-5x"></i>   
                        <h5>Drag and drop video files to upload</h5> 
                        <p>Your videos will be private until you publish them.</p>
                        <input
                            className='select-files-btn'
                            type="file"
                            id='select-file'
                            onChange={this.handleFile.bind(this)}
                        />
                        <label htmlFor="select-file" className = 'select-files-label'>
                            SELECT FILES
                        </label>
                        <p>By submitting your videos to YouTube, you acknowledge that you agree to YouTube's Terms of Service and Community Guidelines. Please be sure not to violate others' copyright or privacy rights. Learn more</p>
                    </div>
                );
            case 1:
                return (
                    <div className = 'create-video-step2'>
                        <div className='upload-header'> Video Details </div>
                        <form className = 'upload-form' onSubmit={this.handleSubmit.bind(this)}>
                            <div className = 'title-description'>
                                <input
                                    type='text'
                                    value={this.state.title}
                                    onChange={this.update('title')}
                                    placeholder = 'Title (required)'
                                    className = 'upload-title'
                                />
                                <input
                                    type='number'
                                    value={this.state.lat}
                                    onChange={this.update('lat')}
                                    placeholder='Latitude(-90 to 90)'
                                    className='upload-lat'
                                />
                                <input
                                    type='number'
                                    value={this.state.lng}
                                    onChange={this.update('lng')}
                                    placeholder='Latitude(-180 to 180)'
                                    className='upload-lng'
                                />
                                <textarea
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    placeholder = 'Description (Tell viewers about your video) '
                                    className = 'upload-description'
                                />    
                            </div>
                            {preview}
                            <br/>
                            <div className = 'upload-button'>
                                <button type='submit'>SAVE</button>
                            </div>
                            
                        </form>
                    </div>
                );
            case 2:
                return (
                    <Redirect to='/users/video'/>
                )
        }
    }
}

export default CreateVideo;