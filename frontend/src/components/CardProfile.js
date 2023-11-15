import React from 'react';
import './CardProfile.css';

function Profile({children, ...props}) {
    return (
        <div className='Profile'>
            <img className='Profile__avatar' src={props.avatarUrl} alt=""/>
            <h1 className='Profile__username'>{props.username}</h1>
            <p className='Profile__fullname'>{props.fullname}</p>
            <hr className='Profile__space-delimiter'/>
            <p className='Profile__bio'>{props.bio}</p>
            <hr className='Profile__space-delimiter'/>
            <div className='Profile__links'>
                {children}
            </div>
        </div>
    );
}

export default Profile;