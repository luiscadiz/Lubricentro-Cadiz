import React from 'react';
import {AppBar, Button, Toolbar, Typography, Icon, makeStyles} from '@material-ui/core/'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CartWidget } from '../CartWidget/CartWidget'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    icon:{
        flexGrow: 1
    }
}))

const NavBar = () => {
    const classes = useStyles();
    return(
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant = 'h6'>
                        Lubricentro LC                    
                    </Typography>
                    <Button variant="text" color="inherit" >
                        Nuestros Productos
                    </Button>
                    <Button variant="text" color="inherit" >
                        Contactanos
                    </Button>
                    <Button className={classes.icon}/>
                    <CartWidget />
                </Toolbar>
            </AppBar>
            <div className = {classes.offset}></div>
        </div>
    )
}

export default NavBar;