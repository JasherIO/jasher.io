import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        {/* TODO: Link to / */}
        <Link to='/' className="navbar-item">
          <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"></img>
        </Link>
        <span className="navbar-burger burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" className="navbar-menu">
        <div className="navbar-end">
          <Link to="/about" className="navbar-item">
            About
          </Link>
          <Link to="/blog" className="navbar-item">
            Blog
          </Link>
          <a className="navbar-item">
            <span className="icon">
              <i className="fab fa-lg fa-github" aria-hidden="true"></i>
            </span>
          </a>
          <a className="navbar-item">
            <span className="icon">
              <i className="fab fa-lg fa-linkedin" aria-hidden="true"></i>
            </span>
          </a>
          <a className="navbar-item">
            <span className="icon">
              <i className="fab fa-lg fa-twitter" aria-hidden="true"></i>
            </span>
          </a>
          <a className="navbar-item">
            <span className="icon">
              <i className="fab fa-lg fa-twitch" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
