import React, { Component, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AlertBox from './AlertBox';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});


export default class FormUserDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showAlert: false
        };
    }

    continue = e => {
        const { values: { firstName, lastName, email } } = this.props;
        if(firstName === '' || lastName === '' || email === '') {
            this.setState({ showAlert: true });
            setTimeout(() => {
                this.setState({showAlert: false});
            }, 3000)
        } else {
            this.setState({ showAlert: false });
            this.props.nextStep();
        }
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        const {showAlert} = this.state;
        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                Enter User Details
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box mt={3}>
                        {showAlert ? <AlertBox /> : null}
                        <TextField
                            placeholder="Enter your first name"
                            label="First Name"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            placeholder="Enter your last name"
                            label="Last Name"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            placeholder="Enter your email"
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            style={styles.button}
                            onClick={this.continue}
                        >Continue</Button>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
};
