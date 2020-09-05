import React from 'react';
import { Container, Typography } from '@material-ui/core';
import logo from '../../image/fb.jpg'

const Header = () => {
    return (
        <div>
            <Container>
                <Typography align="center" component="div">
                    <h1><img width="30px" src={logo} alt=""/> Fake Facebook Post</h1>
                </Typography>
            </Container>
        </div>
    );
};

export default Header;