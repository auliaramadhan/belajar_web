import React, { Component } from 'react';
import 'whatwg-fetch';
import { Route, Switch } from 'react-router-dom'
import Project from './AppProject';
import TV from './AppTv';
import Post from './AppPost';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

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
