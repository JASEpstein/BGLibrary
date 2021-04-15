import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Nav from './components/Nav';
import Auth from './components/Auth'
import Callback from './components/Callback';
class App extends Component {
  constructor(props){
    super(props)
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <>
        < Nav />
        <div className='body'>
          <Route path="/" exact render={ props => <Home auth={this.auth} {...props} />} />
          <Route path="/profile" component={Profile} />
          <Route path="/callback" exact render={ props => <Callback auth={this.auth} {...props} />} />
        </div>
      </>
      
    )
  }
}

export default App;
