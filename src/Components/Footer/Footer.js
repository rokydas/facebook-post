import React from 'react';
import './Footer.css';
import { Box } from '@material-ui/core';

const Footer = () => {
    return (
        <Box bgcolor="primary.main" className="footer">
            <h1>About us</h1>
            <p>This is a fake facebook website. I have tried to implement some small features according to Facebook.</p>
        </Box>
    );
};

export default Footer;