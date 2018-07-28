import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import CategoryMenu from '../Categories/Menu'

const PostItem = ({ post }) => (
  <div 
    style={{ padding: '1em 0em' }}>
    <Link to={post.fields.slug}>
      <p className="is-size-4 has-text-weight-semibold">{post.frontmatter.title}</p>
    </Link>
    <div className="content">
      {/* <br /> */}
      <div>{post.excerpt}</div>
      <div className="is-size-6 has-text-grey">
        <time dateTime="post.frontmatter.date">{post.frontmatter.date}</time>
        <span>&nbsp;&bull;&nbsp;{post.timeToRead} minute read</span>
      </div>
    </div>
  </div>
)

const PostList = ({ title, posts, categories }) => (
  <div className="columns">
    <div className="column is-offset-one-fifth is-two-fifths">
      <div className="is-size-3">{title}</div>
      {posts
        .map(({ node: post }) => (
          <PostItem post={post} key={post.id} />
        ))}
    </div>
    <div className="column is-one-fifth">
      <CategoryMenu categories={categories} />
    </div>
  </div>
)

PostList.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.arrayOf(
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
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string,
      totalCount: PropTypes.number
    })
  ),
}

export default PostList
