import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.scss';

const FormInput = ({ label, handleChange, value, ...otherProps }) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {label && (
                <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            )}
        </div>
    )   
}

FormInput.propTypes = {
    label: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default FormInput;