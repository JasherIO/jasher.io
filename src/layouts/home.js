import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import config from '../data/config.json'
import './all.sass'

const HomeWrapper = ({ children }) => {
  return (
    <div>
      <Helmet title={`Home | ${config.title}`} />
      <div>{children()}</div>
    </div>
  )
}

HomeWrapper.propTypes = {
  children: PropTypes.func,
}

export default HomeWrapper