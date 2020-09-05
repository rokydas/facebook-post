import React from 'react';
import { Box } from '@material-ui/core';

const PostBody = (props) => {
    const { post, pic, name } = props;
    const { id, title, body } = post;
    
    return (
        <Box className="post-box">
                <Box display="flex" flexDirection="row">
                    <img src={pic} alt=""/>
                    <h1 className="name">{name}</h1>
                </Box>

                <h1>Post Id: {id}</h1>
                <h3>Post Title: {title}</h3>
                <p>{body}</p>
        </Box>
    );
};

export default PostBody;