import React from 'react';

class SignupForm extends React.Component {
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

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        // debugger;
        return (
            <div className="form-container">
                <h1> Join the Community </h1>
                <form onSubmit={this.handleSubmit} className="form-box">
                    {/* <br />
                    <div className='error-messages'>{this.renderErrors()}</div>
                    <br /> */}
                    <div className="form">
                        <input type="text"
                                value={this.state.email}
                                className="form-input"
                                placeholder="Email"
                                onChange={this.update('email')}
                            />
                        <div className = 'error-messages'>{this.props.errors.filter(error=> error.includes('Email'))}</div>
                        <input type="text"
                                value={this.state.first_name}
                                className="form-input"
                                placeholder="First Name"
                                onChange={this.update('first_name')}
                            />
                        <div className='error-messages'>{this.props.errors.filter(error => error.includes('First name'))}</div>
                        <input type="text"
                                value={this.state.last_name}
                                className="form-input"
                                placeholder="Last Name"
                                onChange={this.update('last_name')}
                            />
                        <div className='error-messages'>{this.props.errors.filter(error => error.includes('Last name'))}</div>
                        <input type="password"
                                value={this.state.password}
                                className="form-input"
                                placeholder="Password"
                                onChange={this.update('password')}
                            />
                        <br />
                        <div className='error-messages'>{this.props.errors.filter(error => error.includes('Password'))}</div>
                        <input className="session-submit" type="submit" value={this.props.formType} />
                        <p className = 'alternative'> {this.props.navLink} </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;
