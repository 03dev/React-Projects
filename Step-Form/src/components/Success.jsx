import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

export default class Success extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                Success
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box mt={3}>
                        <h1>Thank You For Your Submission</h1>
                        <p>You will get an email with further instructions</p>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
}
