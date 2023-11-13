import React from 'react';
import './Link.css';

function Link(props) {
    return (
        <a className='Link' href={props.link}>
            <img className='Link__icon' src={props.iconUrl} alt=""/>
            <p className='Link__label'>{props.name}</p>
        </a>
    );
}

export default Link;