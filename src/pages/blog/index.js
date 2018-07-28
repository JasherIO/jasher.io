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
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string
      })
    }),
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            excerpt: PropTypes.string,
            timeToRead: PropTypes.number,
            fields: PropTypes.shape({
              slug: PropTypes.string
            }),
            frontmatter: PropTypes.shape({
              templateKey: PropTypes.string,
              title: PropTypes.string,
              description: PropTypes.string,
              date: PropTypes.string
            })
          }),
        })
      ),
    }),
    categories: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string,
          totalCount: PropTypes.number
        })
      )
    }),
    tags: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string,
          totalCount: PropTypes.number
        })
      )
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
          ...PostItemFragment
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
