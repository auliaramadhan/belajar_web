import React, { Component } from 'react';
import logo from './logo.svg';
import 'whatwg-fetch';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Project from './AppProject';
import TV from './AppTv';
import Post from './AppPost';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Project}/>
        <Route path='/tv' component={TV} />
        <Route path='/post' component={Post} />
      </Switch>
    );
  }
}

export default App;
