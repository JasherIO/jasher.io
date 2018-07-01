import React from 'react'
import Link from 'gatsby-link'

import config from '../data/config.json'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: false }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            {/* TODO: Link to / */}
            <Link to='/' className="navbar-item">
              {/* <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"></img> */}
              <span className="is-size-4 has-text-weight-semibold">{config.title}</span>
            </Link>
            <span 
              className={this.state.isToggleOn ? "navbar-burger burger is-active" : "navbar-burger burger"} 
              data-target="navMenu" 
              onClick={this.toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navMenu" 
            className={this.state.isToggleOn ? "navbar-menu is-active" : "navbar-menu"} >
            <div className="navbar-end">
              <Link to="/about" className="navbar-item">
                About
              </Link>
              <Link to="/blog" className="navbar-item">
                Blog
              </Link>
              {/* <a href={`https://github.com/${config.github}`} className="navbar-item">
                <span className="icon">
                  <i className="fab fa-lg fa-github" aria-hidden="true"></i>
                </span>
              </a> */}
              {/* <a href={`https://linkedin.com/in/${config.linkedin}`} className="navbar-item">
                <span className="icon">
                  <i className="fab fa-lg fa-linkedin" aria-hidden="true"></i>
                </span>
              </a> */}
              {/* <a href={`https://twitter.com/${config.twitter}`} className="navbar-item">
                <span className="icon">
                  <i className="fab fa-lg fa-twitter" aria-hidden="true"></i>
                </span>
              </a> */}
              {/* <a className="navbar-item">
                <span className="icon">
                  <i className="fab fa-lg fa-twitch" aria-hidden="true"></i>
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
