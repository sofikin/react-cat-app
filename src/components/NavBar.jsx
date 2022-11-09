import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {FormControlLabel, FormGroup, Switch} from "@mui/material";

export default function NavBar({onModeChange}) {

    const handleModeChange = (event) => {
        onModeChange(event.target.checked);
    }

    return (
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Random Cat App
                    </Typography>
                    <FormGroup>
                        <FormControlLabel control={<Switch onChange={handleModeChange} defaultValue={false} color="error"/>} label="Show your favorites" />
                    </FormGroup>
                </Toolbar>
            </AppBar>
    );
}
