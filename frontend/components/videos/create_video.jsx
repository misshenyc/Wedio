import React from 'react';

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
        formData.append('video[videoclip]', this.state.videoFile);
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
        this.setState({videoFile: e.currentTarget.files[0]})
    }

    render() {
        // debugger
        console.log(this.state);
        return (
            <div className='create-video'>
                <h3>{this.props.formType}</h3>
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
                    <button>{this.props.formType}</button>
                </form>
            </div>
        );
    }
}

export default CreateVideo;