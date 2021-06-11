import { Contador } from "./Contador"
import {Button, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
    }
}))


//Ver como realizar la logica para con las render props
export const ItemCount = () => {

    const classes = useStyle();
    return <Contador>
        {(count,desencrementar, incrementar) => (
            <>
            <div className={classes.container}>
                <Button onClick={incrementar} variant="contained" color="secondary" >
                    <Typography variant='h2'>-</Typography>
                </Button>
                <Typography variant='h2'>{count}</Typography>
                <Button onClick={desencrementar} variant="contained" color="secondary" >
                    <Typography variant='h2'>+</Typography>
                </Button>
            </div>
            <Button variant="contained" color="primary"><Typography >Agregar al carrito</Typography></Button>
            </>
        )}
        
    </Contador>
}