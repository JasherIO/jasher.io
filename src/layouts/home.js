import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import config from '../data/config.json'
import './all.sass'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet title={`Home | ${config.title}`} />
      <div>{children()}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper