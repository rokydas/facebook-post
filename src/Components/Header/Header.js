import React from 'react';
import { Container, Typography, AppBar, Toolbar, Button } from '@material-ui/core';
import logo from '../../image/fb.jpg'
import { makeStyles } from '@material-ui/core/styles';
import './Header.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {

    const classes = useStyles();

    return (
        <div>
            <Container>
                <Typography align="center" component="div">
                    <h1><img width="30px" src={logo} alt=""/> Fake Facebook Post</h1>
                </Typography>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                          <a href="/home">Home</a>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                          <a href="/profile">Profile</a>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                          <a href="/messages">Message</a>
                        </Typography>
                        <Typography variant="h6" className={classes.title}>
                          <a href="/notifications">Notification</a>
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Container>
        </div>
    );
};

export default Header;