import React from 'react'
import Helmet from 'react-helmet'

import PostList from '../components/Posts/List'

class TagRoute extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.posts
    const { group: categories } = data.categories
    const { title } = data.site.siteMetadata
    const tag = this.props.pathContext.tag

    return (
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <PostList title={tag} posts={posts} categories={categories} />
      </section>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPageQuery($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      limit: 100
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
  }
`
