// import { Contador } from "./Contador"
import {Button, makeStyles, Typography } from '@material-ui/core'
import { useState } from 'react';

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
    },
    addCarrito:{
        flexDirection:'column'
    }
}))

export const ItemCount = ({stock,initial,onAdd}) => {

    const [count,setCount] = useState(initial);
    const incrementar = () => count < stock? setCount(count+1): console.log('No hay Stock de productos');
    const desincrementar = () => count !== 0? setCount(count-1): console.log('No se puede agregar valoresn negativos');

    const classes = useStyle();
    return <div className={classes.container}>
        <Button onClick={desincrementar} variant='contained' color='secondary'>
            <Typography variant='h4'>-</Typography>
        </Button>
        <Typography variant='h4'>{ count }</Typography>
        <Button onClick={incrementar} variant='contained' color='secondary'>
            <Typography variant='h4'>+</Typography>
        </Button>
        <Button onClick={()=>onAdd(count)} className={classes.addCarrito}>Agregar al Carrito</Button>
    </div>
}