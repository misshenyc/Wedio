import React from 'react';
import { Link } from 'react-router-dom';



const SideBar = () => {
    return (
        <div className = 'side-bar-container'>
            <div className = 'home'>
                <i class="fas fa-home fa-lg"></i>
                <br/>
                <span> Home </span>
            </div>      
            <div className='library'>
                <i class="fas fa-photo-video  fa-lg"></i>
                <br />
                <span> Library </span>
            </div>
            <div className='upload'>
                <i class="fas fa-cloud-upload-alt fa-lg"></i>
                <br />
                <span> Upload </span>
            </div>      
            <div className='linkedin'>
                <i class="fab fa-linkedin fa-lg"></i>
                <br />
                <span> Linkedin </span>
            </div>         
            <div className='github'>
                <i class="fab fa-github fa-lg"></i>
                <br />
                <span> Github </span>
            </div>    
        </div>
    )
};


export default SideBar;