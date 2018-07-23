import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import config from '../data/config.json'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children, location }) => {
  return (
    <div>
      <Helmet title={`${config.title}`} />
      <Navbar />
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div>{children()}</div>
        </div>
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper