import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }



    render() {
        return (
            <div className="form-container">
                <h1> Welcome back! {this.state.first_name} {this.state.last_name} </h1>
                <form onSubmit={this.handleSubmit}>
                <br />
                    <p className = 'error-messages'>{this.renderErrors()}</p>
                    <br />
                    <div className="form">
                        <br />
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="form-input"
                                placeholder="Email"
                            />
                        <br />
                        <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="form-input"
                                placeholder="Password"
                            />
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <p className='alternative'> {this.props.navLink} </p>
                    </div>
                </form>
                <button className='alternative' onClick={() => this.props.demoLogin()}>Demo User</button> 
            </div>
        );
    }
}

export default LoginForm;
