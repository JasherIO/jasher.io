import React from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'

import TagList from '../../../components/Tags/List'

const TagsPage = ({
  data: { allMarkdownRemark: { group }, 
  site: { siteMetadata: { title } } },
}) => {
  const tags = _.map(group, 'fieldValue')

  return (
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <TagList tags={tags} />
    </section>
  )
}

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
