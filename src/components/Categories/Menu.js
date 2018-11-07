import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, StaticQuery } from 'gatsby'
import _ from 'lodash'

const PureMenu = ({ data }) => {
  const categories = data.allMarkdownRemark.group

  return (
    <aside className="menu">
      <p className="menu-label">
        Categories
      </p>
      <ul className="menu-list">
        {_.map(categories, (category) => (
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
}

PureMenu.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string,
      totalCount: PropTypes.number
    })
  ),
}

const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { in: ["post"] } }}
      limit: 1000
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`

export const Menu = props => (
  <StaticQuery query={query} render={data => <PureMenu data={data} {...props} />} />
)

export default Menu
