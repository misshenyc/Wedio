import React from 'react';
import { Redirect } from "react-router-dom";

class CreateVideo extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        // debugger
        this.state = this.props.video
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        if (this.state.videoFile) {
            formData.append('video[videoclip]', this.state.videoFile);
        }
        // debugger
        this.props.createVideo(formData);
    }

    update(field) {
        // debugger
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleFile(e){
        // e.preventDefault();
        // debugger
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({videoFile: file, videoUrl: fileReader.result})
        }
        if(file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        // debugger
        console.log(this.props.video);
        // if (this.props.video.created) {
        //     <Redirect to ='/'></Redirect>
        // }
        const preview = this.state.videoUrl ? <video src = {this.state.videoUrl} control= 'true'/> : null;
        return (
            <div className='create-video'>
                <h3>Create Video</h3>
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
                    <input type="file"
                        onChange={this.handleFile.bind(this)} />
                    <br/>
                    <h4> Video Preview </h4>
                    {preview}
                    <button type = 'submit'>Create Video</button>
                </form>
            </div>
        );
    }
}

export default CreateVideo;