import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, ...otherProps }) => {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )   
}

Button.propTypes = {
    children: PropTypes.node.isRequired
}

export default Button;