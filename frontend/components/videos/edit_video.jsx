import React from 'react';


class EditVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.video;
        // debugger;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        const {video} = this.props
        if (!video) return null;
        return (
            <div className = 'edit-video'>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title
                        <br/>
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
                    <button>{this.props.formType}</button>
                </form>
            </div>
        );
    }
}

export default EditVideo;
