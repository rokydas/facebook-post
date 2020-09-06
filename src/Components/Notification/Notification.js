import React from 'react';
import { Box, Button, Container } from '@material-ui/core';

const Notification = (props) => {
    const notification = props.notification;
    return (
        <div className="message">
            <p>{notification.noti}</p>
            <Button variant="contained" color="primary">
                Open this notification
            </Button>
        </div>
    );
};

export default Notification;