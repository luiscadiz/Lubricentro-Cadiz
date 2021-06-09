import React from 'react';
import Typography from '@material-ui/core/Typography'

const ItemListContainer = props => {
    const {text} = props;
    return (
        <Typography variant = 'h3'>{text}</Typography>
    )
}

export default ItemListContainer;