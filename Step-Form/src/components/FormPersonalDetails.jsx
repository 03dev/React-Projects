import React, { Component } from 'react';
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

export default class FormPersonalDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {showAlert: false}
    }

    continue = e => {
        e.preventDefault();
        const {ocuupation, city, bio} = this.props;
        if(ocuupation === '' || city === '' || bio === '') {
            this.setState({showAlert: true});
            setTimeout(() => {
                this.setState({showAlert: false});
            }, 3000);
        }else {
            this.setState({showAlert: false});
            this.props.nextStep();
        }
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { showAlert } = this.state;
        const { values, handleChange } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                Enter Personal Details
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    
                    <Box mt={3}>
                        {showAlert ? <AlertBox /> : null}
                        <TextField
                            placeholder="Enter your Occupation"
                            label="Occupaion"
                            onChange={handleChange('occupation')}
                            defaultValue={values.ocuupation}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            placeholder="Enter your City"
                            label="City"
                            onChange={handleChange('city')}
                            defaultValue={values.city}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            placeholder="Enter your Bio"
                            label="Bio"
                            onChange={handleChange('bio')}
                            defaultValue={values.bio}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            style={styles.button}
                            onClick={this.back}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            style={styles.button}
                            onClick={this.continue}
                        >
                            Continue
                        </Button>
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
