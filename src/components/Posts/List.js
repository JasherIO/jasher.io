import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import _ from 'lodash'

const PostItem = ({ post }) => (
  <div 
    style={{ padding: '1em 2em' }}>
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
)

const PostCard = ({ post }) => {
  return (
  <div className="card">
    <div className="card-image">
      <figure className="image is-16by9">
        <img src={post.frontmatter.image} alt="Post image" />
      </figure>
    </div>
    <div className="card-content">
      <div className="content">
        <Link to={post.fields.slug}>
          <h3 class="title is-3" style={{marginBottom: "0.25rem"}}>{post.frontmatter.title}</h3>
        </Link>
        <div>{post.excerpt}</div>
        <br />
        <div className="is-size-6">
          <time dateTime="post.frontmatter.date">{post.frontmatter.date}</time>
          <span>&nbsp;&bull;&nbsp;{post.timeToRead} minute read</span>
        </div>
      </div>
    </div>
  </div>
)}

const PostList = ({ title, posts }) => (
  <div className="columns">
    <div className="column is-offset-one-fifth is-three-fifths">
      <div className="is-size-3">{title}</div>
      {posts
        .map(({ node: post }) => (
          <PostCard post={post} key={post.id} />
        ))}
    </div>
  </div>
)

PostList.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.array
}

export default PostList
