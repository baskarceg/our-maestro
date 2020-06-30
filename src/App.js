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


class App extends Component {


  navigate = (param ) => {
    console.log(param);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/videos/:id" exact component={VideosPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/herWorld" component={HerWorld} />
          <Route path="/friends" component={Friends} />
          <Route path="/family" component={Family} />
          <Route path="/" component={HomePage} />
          <Redirect from="/" to="/home" />
        </Switch>
        
      </div>
    );
  }
}

export default App;
