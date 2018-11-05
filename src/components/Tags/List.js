import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const TagList = ({ tags }) => (
  <div>
    {tags.map(tag => (
      <Link to={`/blog/tags/${kebabCase(tag)}`} key={tag}>
        <span style={{marginRight: "0.25rem"}}>{`#${kebabCase(tag)}`}</span>
      </Link>
    ))}
  </div>
)

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default TagList
