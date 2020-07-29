import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import EditVideoContainer from './videos/edit_video_container';
import CreateVideoContainer from './videos/create_video_container'
import SideBar from './sidebar/sidebar'

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <img id = 'hamburger-menu' src = {window.hamburgerIcon}/>           
                <img id = 'full-logo' src = {window.fullLogo}/>           
            </Link>
            <GreetingContainer />
            <SideBar />
        </header>
        <Switch>
            <Route exact path="/" component={VideoIndexContainer} />
            <ProtectedRoute exact path="/videos/new" component={CreateVideoContainer} />
            <Route exact path="/videos/:videoId" component={VideoShowContainer} />
            <ProtectedRoute path="/videos/:videoId/edit" component={EditVideoContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;