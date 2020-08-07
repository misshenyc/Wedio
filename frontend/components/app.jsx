import React from 'react';
import GreetingContainer from '../components/greeting/greeting_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import VideoIndexContainer from './videos/video_index_container';
import VideoShowContainer from './videos/video_show_container';
import EditVideoContainer from './videos/edit_video_container';
import SearchResultContainer from './search/search_result_container';
import VideoMapContainer from './videos/video_map_container';
import EditCommentContainer from './comments/comment_edit_container'
import SideBar from './sidebar/sidebar'
import CurrentUserVideoContainer from './videos/currentuser_video_container';
import ModalContainer from './modal/modal';
import SearchBar from './search/search_bar';
import SearchBarContainer from './search/search_bar_container'

const App = () => (
    <div className = 'full-height'>
        <header>
            <div className = 'navbar'>
                <img 
                    id = 'hamburger-menu' 
                    src = {window.hamburgerIcon}
                    onClick = {()=>menuClick()}
                />           
                <Link to="/" className="header-link">
                    <img id = 'full-logo' src = {window.newLogo}/>           
                </Link>
                <SearchBarContainer />
                <GreetingContainer />
            </div>
            <SideBar />
        </header>

        <ModalContainer />
        <Switch>
            <Route exact path="/" component={VideoIndexContainer} />
            {/* <Route path="/" component={SearchBarContainer} /> */}
            <ProtectedRoute path="/videos/:videoId/edit" component={EditVideoContainer} />
            <Route path = '/videos/search' component = {SearchResultContainer}/>
            <Route path="/videos/map" component={VideoMapContainer} />
            <Route path="/videos/:videoId" component={VideoShowContainer} />
            <ProtectedRoute path="/users/video" component={CurrentUserVideoContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/videos/:videoId/comment/:commentId/edit" component={EditCommentContainer}/>
        </Switch>
    </div>
);

export default App;

const menuClick = ()=>{
    event.stopPropagation();
    if ($("body").hasClass("opened")) {
        $(".sidebar").animate({
            width: "59px"
        }, 300);
        $("body").removeClass('opened');
        $(".sidebar .sidebar-links").find('span').addClass('closed');
        $('.sidebar .sidebar-links').find('span').fadeOut(300);

    } else {
        $(".sidebar").animate({
            width: "193px"
        }, 300);
        $("body").addClass('opened');
        $(".sidebar .sidebar-links").find('span').removeClass('closed');
        $('.sidebar .sidebar-links span').show();
    }
}

//TODOS: not video owner can edit videos not belonging to them; 
//TODOS: loggedin user can not like or unlike the video;
//TODOS: show video's geo tags on a map
//TODOS: clear search input once searched