import React from 'react';
import fakeMessage from '../../fakeMessage/fakeMessage';
import Message from '../Message/Message';
import { Container } from '@material-ui/core';


const Messages = () => {

    // console.log(fakeMessage);

    return (
        <Container>
             {
                 fakeMessage.map(message => <Message key={message.id} message={message}></Message>)
             }
            
        </Container>
    );
};

export default Messages;