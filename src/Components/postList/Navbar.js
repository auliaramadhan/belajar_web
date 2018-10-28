import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/post">Poke' Times</Link>
        <ul className="right">
          <li><NavLink exact to="/post">Home</NavLink></li>
          <li><NavLink to='/post/about'>About</NavLink></li>
          <li><NavLink to='/post/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)