import React from 'react';
import PropTypes from 'prop-types';
import './CollectionItem.scss';

const CollectionItem = ({ id, name, imageUrl, price }) => {
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})`}}></div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )   
}



CollectionItem.propTypes = {
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    imageUrl: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired,
}

export default CollectionItem;