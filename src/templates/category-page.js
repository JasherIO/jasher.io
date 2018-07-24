import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import PostList from '../components/Posts/List'

class CategoryRoute extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { title } = data.site.siteMetadata
    const tag = this.props.pathContext.tag

    return (
      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="columns">
          <div className="column">
            <PostList title={tag} posts={posts} />
          </div>
        </div>
      </section>
    )
  }
}

export default CategoryRoute

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 400)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            description
            image
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
