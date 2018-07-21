import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import _ from 'lodash'

import PostList from '../../components/Posts/List'
import TagMenu from '../../components/Tags/Menu'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.posts
    const { title } = data.site.siteMetadata
    const { group } = data.tags
    const tags = _.sortBy(_.each(group, (o) => { o.fieldValue = _.startCase(o.fieldValue) }), 'fieldValue')

    return (
      <section className="section">
        <Helmet title={`Blog | ${title}`} />
        <div className="columns">
          <div className="column">
            <PostList posts={posts} />
          </div>
          {/* <div className="column is-one-quarter">
            <TagMenu tags={tags} path={this.props.location.pathname} />
          </div> */}
        </div>
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
    tags: PropTypes.shape({
      group: PropTypes.array,
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
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
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
    tags: allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
