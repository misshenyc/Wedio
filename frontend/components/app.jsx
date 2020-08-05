import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import EditVideoContainer from './videos/edit_video_container';
import SearchResultContainer from './search/search_result_container'
import EditCommentContainer from './comments/comment_edit_container'
import SideBar from './sidebar/sidebar'
import CurrentUserVideoContainer from './videos/currentuser_video_container';
import ModalContainer from './modal/modal';
import SearchBar from './search/search_bar';
import SearchBarContainer from './search/search_bar_container'

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <img id = 'hamburger-menu' src = {window.hamburgerIcon}/>           
                <img id = 'full-logo' src = {window.fullLogo}/>           
            </Link>
            <SearchBarContainer />
            <GreetingContainer />
            <SideBar />
        </header>
        
        <ModalContainer />

        <Switch>
            <Route exact path="/" component={VideoIndexContainer} />
            {/* <Route path="/" component={SearchBarContainer} /> */}
            <ProtectedRoute path="/videos/:videoId/edit" component={EditVideoContainer} />
            <Route path = '/videos/search' component = {SearchResultContainer}/>
            <Route path="/videos/:videoId" component={VideoShowContainer} />
            <ProtectedRoute path="/users/video" component={CurrentUserVideoContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/videos/:videoId/comment/:commentId/edit" component={EditCommentContainer}/>
        </Switch>
    </div>
);

export default App;