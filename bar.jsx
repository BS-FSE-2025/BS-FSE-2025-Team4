import React from 'react'
import {AppBar, Typography, Toolbar, Button} from "@mui/material";
import { Logout } from './Logout';
export const Bar = () => {
    return (
        <>
        <AppBar>
            <Toolbar>
                <Typography>ליגות כדורגל </Typography>
                <Button>פרופיל</Button>
                <Logout/>
            </Toolbar>
        </AppBar>
        </>
    )
}