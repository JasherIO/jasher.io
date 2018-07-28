import React from 'react'
import Helmet from 'react-helmet'

import PostList from '../components/Posts/List'

class CategoryRoute extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.posts
    const { group: categories } = data.categories
    const { title } = data.site.siteMetadata
    const category = this.props.pathContext.category

    return (
      <section className="section">
        <Helmet title={`${category} | ${title}`} />
        <PostList title={category} posts={posts} categories={categories} />
      </section>
    )
  }
}

export default CategoryRoute

export const categoryPageQuery = graphql`
  query CategoryPageQuery($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      limit: 100
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: $category } } }
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
