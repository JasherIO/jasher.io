import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import _ from 'lodash'

const TagMenu = ({ tags, path }) => (
  <aside className="menu">
    <p className="menu-label">
      Tags
    </p>
    <ul className="menu-list">
      {tags.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${_.kebabCase(tag.fieldValue)}`} 
                className={_.kebabCase(tag.fieldValue) === path ? "has-text-weight-semibold" : "has-text-weight-normal"}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </aside>
)

TagMenu.propTypes = {
  tags: PropTypes.array,
  path: PropTypes.string
}

export default TagMenu
