import React from 'react';
import {Link} from 'react-router-dom';
// import connect from 'react-router-dom';

function GenericNotFound () {
     return(
            <div className = 'page404'>
                <img src= 'https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg'></img>
                <div className = 'backhome'><Link to='/'>Take me back home</Link></div>
            </div>
        )
    }

export default GenericNotFound;