import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import config from '../data/config.json'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children, location }) => {
  return (
    <div>
      <Helmet title={`${config.title}`} />
      <Navbar />
      <div>{children()}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper