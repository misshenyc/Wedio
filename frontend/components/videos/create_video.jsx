import React from 'react';

class CreateVideo extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        this.state = this.props.video;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // debugger
        e.preventDefault();
        this.props.action(this.state);
    }

    update(field) {
        // debugger
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        // debugger
        return (
            <div className='create-video'>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
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
                    <button>{this.props.formType}</button>
                </form>
            </div>
        );
    }
}

export default CreateVideo;