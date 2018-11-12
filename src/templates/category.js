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
      <section className="section container">
        <Helmet title={`${category}`} />

        <div className="columns is-multiline">
          <div className="column is-offset-2 is-8">
            <div className="title is-2">
              {category}
            </div>
          </div>

          {_.map(posts, ({ node: post }) => (
            <div className="column is-offset-2 is-8" key={post.id}>
              <Tile post={post} />
            </div>
          ))}
        </div>
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
              templateKey: PropTypes.string,
              image: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object,
              ]),
              title: PropTypes.string,
              description: PropTypes.string,
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
      filter: { frontmatter: { templateKey: { in: ["post"] }, category: { in: [$category] } } }
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
            templateKey
            image {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
            description
            category
            date
          }
        }
      }
    }
  }
`

