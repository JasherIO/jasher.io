import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import _ from 'lodash'

import TagList from '../Tags/List'

const PostItem = ({ post }) => (
  <div 
    style={{ padding: '1em 0em' }}>
    <Link to={post.fields.slug}>
      <p className="is-size-4 has-text-weight-semibold">{post.frontmatter.title}</p>
    </Link>
    <div className="content">
      {/* <br /> */}
      <div>{_.isEmpty(post.frontmatter.description) ? post.excerpt : post.frontmatter.description}</div>
      <div className="is-size-6 has-text-grey">
        <time dateTime="post.frontmatter.date">{post.frontmatter.date}</time>
        <span>&nbsp;&bull;&nbsp;{post.timeToRead} minute read</span>
      </div>
    </div>
  </div>
)

const PostList = ({ title, posts }) => (
  <div className="columns">
    <div className="column is-offset-one-fifth is-three-fifths">
      <div className="is-size-3">{title}</div>
      {posts
        .map(({ node: post }) => (
          <PostItem post={post} key={post.id} />
        ))}
    </div>
  </div>
)

PostList.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.array
}

export default PostList
