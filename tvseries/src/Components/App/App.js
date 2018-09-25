import React, { Component } from 'react';
import logo from './logo.svg';
import '../css/App.css';
import 'whatwg-fetch';
import Main from './Main';
// import { fetch } from 'whatwg-fetch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
