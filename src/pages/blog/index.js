import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import PostList from '../../components/Posts/List'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { title } = data.site.siteMetadata

    return (
      <section className="section">
        <Helmet title={`Blog | ${title}`} />
        <div className="columns">
          <div className="column">
            <PostList title="Latest Posts" posts={posts} />
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 100
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
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
