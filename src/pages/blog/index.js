import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import PostList from '../../components/Posts/List'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.posts
    const { group: categories } = data.categories
    const { title } = data.site.siteMetadata

    return (
      <section className="section">
        <Helmet title={`Blog | ${title}`} />
        <PostList title="Latest Posts" posts={posts} categories={categories} />
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
    posts: PropTypes.shape({
      edges: PropTypes.array,
    }),
    categories: PropTypes.shape({
      group: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BloxIndexQuery {
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
