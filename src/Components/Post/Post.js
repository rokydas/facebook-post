import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import './Post.css';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const Post = (props) => {

    const history = useHistory();

    const viewPost = (id) => {
        history.push('/post/'+id);
    }

    const { id, title } = props.post;

    const classes = useStyles();

    return (
        <Box color="text.primary" className="post-box">
            <h3>Post Id: {id}</h3>
            <h3>Post Title: {title}</h3>
            <Button
                onClick={() => viewPost(id)}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                See Full Post
            </Button>
        </Box>
    );
};

export default Post;