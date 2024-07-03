import React, { Component } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const theme = createTheme({
    palette: {
        mode: 'light',
    },
});

export default class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // Process need to do done here before success message like any api call or something
        
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, city, occupation, bio } } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">
                                Confirm User Details
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box mt={3}>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="First Name"
                                    secondary={firstName}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Last Name"
                                    secondary={lastName}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Email"
                                    secondary={email}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="City"
                                    secondary={city}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Occupation"
                                    secondary={occupation}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Bio"
                                    secondary={bio}
                                />
                            </ListItem>
                        </List>
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
                            Confirm & Continue
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
