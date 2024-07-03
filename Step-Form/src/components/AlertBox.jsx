import React, { Component } from 'react';
import Alert from '@mui/material/Alert';

export default class AlertBox extends Component {
    render() {
        return (
            <div>
                <Alert variant="outlined" severity="warning">
                    All fields are mandatory.
                </Alert>
            </div>
        );
    }
}
