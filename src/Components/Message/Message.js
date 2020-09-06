import React, { useState, useEffect } from 'react';
import { Box, Button } from '@material-ui/core';
import './Message.css';

const Message = (props) => {

    const [pic, setPic] = useState('')

    const [name, setName] = useState('')

    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            setPic(data.results[0].picture.large);
            setName(data.results[0].name.first + ' ' + data.results[0].name.last)
        })
    }, [])

    return (
        <div className="message">
            <Box className="user" display="flex" flexDirection="row">
                <img src={pic} alt=""/>
                <h1 className="name">{name}</h1>
            </Box>
            {/* <h3>Id: {props.message.id}</h3> */}
            <h3>Message: </h3>
            <p>{props.message.message}</p>
            <Button variant="contained" color="primary">
                Open this chat
            </Button>
        </div>
    );
};

export default Message;