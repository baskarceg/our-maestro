/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Navbar from './components/UI/Navbar/Navbar';
/* import classes from './App.module.css'; */
import HomePage from './containers/Homepage/Homepage';
import VideosPage from './containers/VideosPage/VideosPage';
import { Route, Redirect, Switch } from 'react-router-dom';
import HerWorld from './containers/HerWorld/HerWorld';
import Friends from './containers/Friends/Friends';
import Family from './containers/Family/Family';
import About from './containers/About/About';
import classes from './App.module.css';

class App extends Component {


  render() {
    // console.log("App");
    // console.log(window.location.pathname);
    return (
      <div>
        <Navbar path={window.location.pathname}/>
        <div className={classes.Content}>
          <Switch>
            <Route path="/videos/:id" component={VideosPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/herWorld" component={HerWorld} />
            <Route path="/friends" component={Friends} />
            <Route path="/family" component={Family} />
            <Route path="/" component={HomePage} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
