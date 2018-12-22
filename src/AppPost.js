import React, { Component } from 'react';
import Navbar from './Components/postList/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './Components/postList/Home'
import About from './Components/postList/About'
import Contact from './Components/postList/Contact'
import Post from './Components/postList/Post'
import './Components/css/AppPost.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/post' component={Home}/>
            <Route path='/post/about' component={About} />
            <Route path='/post/contact' component={Contact} />
            <Route path='/post/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
