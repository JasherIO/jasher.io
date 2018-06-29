import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import _ from 'lodash'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="">
          {/* <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Recent posts</h1>
          </div> */}
          {posts
            .map(({ node: post }) => (
              <div style={{ padding: '1em 2em' }}>
                <Link to={post.fields.slug}>
                <div className="media">
                  <div class="media-content">
                    <p class="title is-4">{post.frontmatter.title}</p>
                  </div>
                </div>
                </Link>
                <div className="content">
                  {_.isEmpty(post.frontmatter.description) ? post.excerpt : post.frontmatter.description}
                  <br />
                  {/* <br /> */}
                  <time datetime="post.frontmatter.date">{post.frontmatter.date}</time>
                  <span>&nbsp;&bull;&nbsp;{post.timeToRead} minute read</span>
                </div>
              </div>
            ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 400)
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
