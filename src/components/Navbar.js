import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    Bus Tracker
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
