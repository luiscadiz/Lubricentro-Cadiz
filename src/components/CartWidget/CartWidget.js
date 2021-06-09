import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const CartWidget = () => {

    return(
        <div>
            <IconButton color="inherit" aria-label="menu">
               <ShoppingCartIcon />
            </IconButton>
        </div>
    )
};