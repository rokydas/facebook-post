import React from 'react';

const Message = (props) => {
    return (
        <div>
            <h3>Id: {props.message.id}</h3>
            <p>Message: {props.message.message}</p>
        </div>
    );
};

export default Message;