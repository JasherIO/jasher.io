import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import _ from 'lodash'

const CategoryMenu = ({ categories }) => (
  <aside className="menu">
    <p className="menu-label">
      Categories
    </p>
    <ul className="menu-list">
      {categories.map((category) => (
        <li key={category.fieldValue}>
          <Link to={`/blog/category/${_.kebabCase(category.fieldValue)}`} className="has-text-weight-normal" activeClassName="has-text-weight-semibold">
            {category.fieldValue} ({category.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </aside>
)

CategoryMenu.propTypes = {
  categories: PropTypes.array
}

export default CategoryMenu
