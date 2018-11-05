import React from 'react'
import PropTypes from 'prop-types'

import CategoryMenu from '../Categories/Menu'
import PostItem from './Item'

const PostList = ({ title, posts, categories }) => (
  <div className="columns">
    <div className="column is-8">
      <div className="is-size-3">{title}</div>
      {posts
        .map(({ node: post }) => (
          <PostItem post={post} key={post.id} />
        ))}
    </div>
    <div className="column is-4">
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
