import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'
import moment from 'moment'

const Tile = ({ post }) => (
  <div className="tile is-ancestor" style={{ marginTop: "1rem" }}>
    <div className="tile is-parent">
      <div className="tile is-child is-3">
        <Link to={post.fields.slug}>
          <figure className="image is-16by9">
            <img src={post.frontmatter.image} alt={post.frontmatter.title} style={{ borderRadius: "5px" }}/>
          </figure>
        </Link>
      </div>
      <div className="tile is-child is-9" style={{ paddingTop: "0.25rem", paddingLeft: "1rem" }}>
        <div className="title is-4" style={{ marginBottom: "0.5rem" }}>
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </div>
        <div className="content">
          {post.excerpt}
        </div>

        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item">
              <Link to={`/blog/categories/${_.kebabCase(post.frontmatter.category)}`} className="tag is-rounded">
                {post.frontmatter.category}
              </Link>
              {/* <span className="has-text-dark is-uppercase has-text-weight-bold">{post.frontmatter.category}</span> */}
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <time dateTime={post.frontmatter.date} className="has-text-weight-light">{moment(post.frontmatter.date).fromNow()}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Tile
