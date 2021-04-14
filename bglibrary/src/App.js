import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={Home} />
        <Route path ="/profile" component={Profile} />
      </>
      
    )
  }
}

export default App;
