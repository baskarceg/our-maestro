/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Navbar from './components/UI/Navbar/Navbar';
/* import classes from './App.module.css'; */
import HomePage from './containers/Homepage/Homepage';
import VideosPage from './containers/VideosPage/VideosPage';
import { Route } from 'react-router-dom';


class App extends Component {
  



  render() {
    return (
      <div>
        <Navbar />
        <Route path='/videos/:id' exact component={VideosPage} />
        <Route path='/home' exact component={HomePage} />
      </div>
    );
  }
}

export default App;
