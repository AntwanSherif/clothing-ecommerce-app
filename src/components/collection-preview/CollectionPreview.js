import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {items
                    .filter((item, index) => index < 4)
                    .map(({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )   
}



CollectionPreview.propTypes = {
    title: PropTypes.string.isRequired, 
    items: PropTypes.array.isRequired
}

export default CollectionPreview;