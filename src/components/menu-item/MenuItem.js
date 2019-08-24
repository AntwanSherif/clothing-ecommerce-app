import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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
    size: PropTypes.oneOf(['large']),
    linkUrl: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
}

export default withRouter(MenuItem);