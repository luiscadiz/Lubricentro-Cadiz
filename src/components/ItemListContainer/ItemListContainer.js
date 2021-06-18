import React from 'react';
import Typography from '@material-ui/core/Typography'
import { ItemCount } from '../ItemCount/ItemCount';

const ItemListContainer = props => {
    const {text} = props;

    const agregarProducto = (count) => {
        console.log(`Se agregaron ${count} productos`);
    }
    return (<>
        <Typography variant = 'h3'>{text}</Typography>
        <ItemCount stock={10} initial={0} onAdd={agregarProducto} />
        </>
    )
}

export default ItemListContainer;