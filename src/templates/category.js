import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import _ from 'lodash'
import Tile from '../components/Posts/Tile'

export default class CategoryPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.posts
    const { category } = pageContext

    return (
      <section className="section container" style={{ maxWidth: "1000px" }}>
        <Helmet title={`${category}`} />
        
        <div className="title is-size-2-tablet is-size-3-mobile">
          {category}
        </div>

        {_.map(posts, ({ node: post }) => (
          <>
            <Tile post={post} />
            <hr />
          </>
        ))}
      </section>
    )
  }
}

CategoryPage.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            excerpt: PropTypes.string,
            timeToRead: PropTypes.number,
            fields: PropTypes.shape({
              slug: PropTypes.string
            }),
            frontmatter: PropTypes.shape({
              image: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object,
              ]),
              title: PropTypes.string,
              category: PropTypes.string,
              date: PropTypes.string
            })
          }),
        })
      ),
    }),
  }),
}

export const pageQuery = graphql`
  query CategoryQuery($category: String) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 175)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
            category
            date
          }
        }
      }
    }
  }
`

