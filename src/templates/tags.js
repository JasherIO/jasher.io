import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import PostList from '../components/Posts/List'

class TagRoute extends React.Component {
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

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          # excerpt(pruneLength: 400)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
