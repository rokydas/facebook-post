import React from 'react';
import fakeNotification from '../fakeNotification/fakeNotification';
import Notification from '../Notification/Notification';
import { Container } from '@material-ui/core';

const Notifications = () => {

    return (
        <Container>
            {
                fakeNotification.map(notification => <Notification key={notification.id} notification={notification}></Notification>)
            }
        </Container>
    );
};

export default Notifications;