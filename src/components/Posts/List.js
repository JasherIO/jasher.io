import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import _ from 'lodash'

const PostList = ({ posts }) => (
  <div>
    {posts
      .map(({ node: post }) => (
        <div 
          style={{ padding: '1em 2em' }}
          key={post.id}>
          <Link to={post.fields.slug}>
            <p className="is-size-4 has-text-weight-semibold">{post.frontmatter.title}</p>
          </Link>
          <div className="content">
            <div className="is-size-6 has-text-grey">
              <time dateTime="post.frontmatter.date">{post.frontmatter.date}</time>
              <span>&nbsp;&bull;&nbsp;{post.timeToRead} minute read</span>
            </div>
            {/* <br /> */}
            <div>{_.isEmpty(post.frontmatter.description) ? post.excerpt : post.frontmatter.description}</div>
          </div>
        </div>
      ))}
  </div>
)

PostList.propTypes = {
  posts: PropTypes.array
}

export default PostList
