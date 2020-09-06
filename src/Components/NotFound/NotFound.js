import React from 'react';
import { Container, Typography } from '@material-ui/core';

const NotFound = () => {
    return (
        <Container>
            <Typography align="center">
                <h3>Sorry, your desired page is not found</h3>
                <h3>404 Error 😭😭😭</h3>
            </Typography>
            
        </Container>
    );
};

export default NotFound;