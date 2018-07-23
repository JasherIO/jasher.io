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
              <Link to="/blog" className="navbar-item" activeClassName="is-active">
                Blog
              </Link>
              <Link to="/tags" className="navbar-item" activeClassName="is-active">
                Tags
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
