import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';


const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <img id = 'hamburger-menu' src = {window.hamburgerIcon}/>           
                <img id = 'full-logo' src = {window.fullLogo}/>           
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;