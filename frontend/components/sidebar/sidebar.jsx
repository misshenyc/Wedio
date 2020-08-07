import React from 'react';
import { Link } from 'react-router-dom';
import {openCreateModal} from '../../actions/modal_actions';

function SideBar() {
    return (
        <div className = 'sidebar'>
            <div className = 'home'>
                <Link to="/" className = 'sidebar-links'>
                    <i className="fas fa-home fa-lg"></i>
                    <br/>
                    <span> Home </span>
                </Link>
            </div>    
            <div className='library'>
                <Link to='/users/video' className='sidebar-links'>
                    <i className="fas fa-photo-video fa-lg"></i>
                    <br />
                    <span> Library </span>
                </Link>   
            </div>
            <div className='upload'>
                <button onClick={() => dispatch(openCreateModal())} className='sidebar-links'>
                    <i className="fas fa-cloud-upload-alt fa-lg"></i>
                    <br />
                    <span> Upload </span>                
                </button>            
            </div>
            <div className='map'>
                <Link to='/videos/map' className='sidebar-links'>
                    <i className="fas fa-map-marked-alt  fa-lg"></i>
                    <br />
                    <span> Map </span>
                </Link>
            </div>      
            <div className='linkedin'>
                <a href="https://www.linkedin.com/in/milliehe/" className='sidebar-links'>
                    <i className="fab fa-linkedin fa-lg"></i>
                    <br />
                    <span> Linkedin </span>
                </a>
            </div>         
            <div className='github'>
                <a href="https://github.com/misshenyc" className='sidebar-links'>
                    <i className="fab fa-github fa-lg"></i>
                    <br />
                    <span> Github </span>
                </a>
            </div>    
        </div>
    );
}

export default SideBar;
