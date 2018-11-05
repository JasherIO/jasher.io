import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import _ from 'lodash'

const CategoryMenu = ({ categories }) => (
  <aside className="menu">
    <p className="menu-label">
      Categories
    </p>
    <ul className="menu-list">
      {categories.map((category) => (
        <li key={category.fieldValue}>
          <Link to={`/blog/categories/${_.kebabCase(category.fieldValue)}`} className="has-text-weight-normal" activeClassName="has-text-weight-semibold">
            <span>{category.fieldValue}</span>
            <span className="tag is-info is-rounded is-pulled-right">{category.totalCount}</span>
          </Link>
        </li>
      ))}
    </ul>
  </aside>
)

CategoryMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string,
      totalCount: PropTypes.number
    })
  ),
}

export default CategoryMenu
