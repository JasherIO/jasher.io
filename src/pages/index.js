import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">One</p>
            </div>
          </div>
          <div className="tile is-4 is-vertical is-parent">
            <div className="tile is-child box">
              <p className="title">Two</p>
            </div>
            <div className="tile is-child box">
              <p className="title">Three</p>
            </div>
          </div>
        </div>
      </div>
      
      // <section className="section">
      //   <div className="container">
      //     <div className="content">
      //       <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
      //     </div>
      //     {posts
      //       .map(({ node: post }) => (
      //         <div
      //           className="content"
      //           style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
      //           key={post.id}
      //         >
      //           <p>
      //             <Link className="has-text-primary" to={post.fields.slug}>
      //               {post.frontmatter.title}
      //             </Link>
      //             <span> &bull; </span>
      //             <small>{post.frontmatter.date}</small>
      //           </p>
      //           <p>
      //             {post.excerpt}
      //             <br />
      //             <br />
      //             <Link className="button is-small" to={post.fields.slug}>
      //               Keep Reading →
      //             </Link>
      //           </p>
      //         </div>
      //       ))}
      //   </div>
      // </section>
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
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
