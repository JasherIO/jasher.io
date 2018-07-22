import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { kebabCase } from 'lodash'

const TagList = ({ tags }) => (
  <div className="tags" >
    {tags.map(tag => (
      <span className="tag is-large" key={tag}>
        <Link to={`/tags/${kebabCase(tag)}`}>
          <span className="">{tag}</span>
        </Link>
      </span>
    ))}
  </div>
)

TagList.propTypes = {
  tags: PropTypes.array,
}

export default TagList
