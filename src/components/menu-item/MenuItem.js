import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['large'])
}

export default MenuItem;