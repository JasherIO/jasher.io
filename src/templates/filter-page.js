import React from 'react'
import Helmet from 'react-helmet'

import PostList from '../components/Posts/List'

class FilterRoute extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.posts
    const { group: categories } = data.categories
    const { title } = data.site.siteMetadata
    const filter = this.props.pathContext.filter

    return (
      <section className="section">
        <Helmet title={`${filter} | ${title}`} />
        <PostList title={filter} posts={posts} categories={categories} />
      </section>
    )
  }
}

export default FilterRoute

export const filterPageQuery = graphql`
  query FilterPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      limit: 100
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 175)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    categories: allMarkdownRemark(
      limit: 100
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
    tags: allMarkdownRemark(
      limit: 100
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
