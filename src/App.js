import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import PostDetails from './Components/PostDetails/PostDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import Notification from './Notification/Notification';


function App() {
  
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/notification">
            <Notification />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:id">
            <PostDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          <Route path="/post/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

