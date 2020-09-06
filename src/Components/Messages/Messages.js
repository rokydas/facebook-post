import React from 'react';
import fakeMessage from '../../fakeMessage/fakeMessage';
import Message from '../Message/Message';


const Messages = () => {

    // console.log(fakeMessage);

    return (
        <div>
             {
                 fakeMessage.map(message => <Message message={message}></Message>)
             }
            
        </div>
    );
};

export default Messages;