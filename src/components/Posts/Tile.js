import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Level from './Level'

const Tile = ({ post }) => (
  <div className="tile is-ancestor" style={{ marginTop: "1rem" }}>
    <div className="tile is-parent">
      <div className="tile is-child is-4">
        <figure className="image">
          <Link to={post.fields.slug}>
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
          </Link>
        </figure>
      </div>
      <div className="tile is-child is-9" style={{ padding: "0rem 1rem" }}>
        <div className="title is-4 is-post" style={{ marginBottom: "0.5rem" }}>
          <Link to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
        </div>
        
        <div className="content" style={{ marginBottom: "0.5rem" }}>
          {post.excerpt}
        </div>

        <Level category={post.frontmatter.category} date={post.frontmatter.date} />
      </div>
    </div>
  </div>
)

export default Tile
