import React from 'react';
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core/'

const NavBar = () => {
    return(
        <div>
            <AppBar>
                <Toolbar>
                    <Typography variant = 'h6'>
                        Lubricentro LC                    
                    </Typography>
                    <Button variant="text" color="inherit">
                        Nuestros Productos
                    </Button>
                    <Button variant="text" color="inherit">
                        Contactanos
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;