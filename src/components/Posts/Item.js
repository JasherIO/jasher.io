import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const PostItem = ({ post }) => (
  <div 
    style={{ padding: '1em 0em' }}>
    <Link to={post.fields.slug}>
      <p className="is-size-4 has-text-weight-semibold">{post.frontmatter.title}</p>
    </Link>
    <div className="content">
      <div>{post.excerpt}</div>
      <div className="is-size-6 has-text-grey">
        <time dateTime="post.frontmatter.date">{post.frontmatter.date}</time>
        <span>&nbsp;&bull;&nbsp;{post.timeToRead} minute read</span>
      </div>
    </div>
  </div>
)

PostItem.propTypes = {
  post: PropTypes.shape({
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
}

export default PostItem

export const postItemFragment = graphql`
  fragment PostItemFragment on MarkdownRemark {
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
`
