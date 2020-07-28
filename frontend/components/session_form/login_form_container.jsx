import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './login_form';
import { clearErrors, demoLogin, login} from '../../actions/session_actions'

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log in',
        navLink: <Link to="/signup">Sign up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoLogin: () => dispatch(demoLogin()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);