import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import _ from 'lodash'

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
          <div className="column is-6 is-offset-2">
            {/* <p className="is-size-3 has-text-weight-bold">Recent posts</p> */}
            {posts
            .map(({ node: post }) => (
              <div 
                style={{ padding: '1em 2em' }}
                key={post.id}>
                <Link to={post.fields.slug}>
                  <p className="is-size-4 has-text-weight-semibold">{post.frontmatter.title}</p>
                </Link>
                <div className="content">
                  {_.isEmpty(post.frontmatter.description) ? post.excerpt : post.frontmatter.description}
                  <br />
                  <time dateTime="post.frontmatter.date">{post.frontmatter.date}</time>
                  <span>&nbsp;&bull;&nbsp;{post.timeToRead} minute read</span>
                </div>
              </div>
            ))}
          </div>
          <div className="column is-2">
            <aside className="menu">
              <p className="menu-label">
                Tags
              </p>
              <ul className="menu-list">
                {tags.map((tag) => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${_.kebabCase(tag.fieldValue)}`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
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
