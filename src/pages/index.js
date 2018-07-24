import React from 'react'

import Social from '../components/Social'
import Navbar from '../components/Navbar'

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered is-fullhd">
            <h1 className="title">
              Josh Willis
            </h1>
            <h2 className="subtitle">
              <div style={{marginBottom: "0.7rem"}}>Software Developer | Tournament Organizer</div>
              <Social />
            </h2>
          </div>
        </div>
      </section>
    )
  }
}
