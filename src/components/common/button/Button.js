import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button 
            className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
            {...otherProps}
        >
            {children}
        </button>
    )   
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isGoogleSignIn: PropTypes.bool
}

Button.defaultProps = {
    isGoogleSignIn: false
}

export default Button;