import React from 'react'
// import PropTypes from 'prop-types'
// import Link from 'gatsby-link'

import Social from '../components/Social'

export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="has-text-centered">
        <div className="is-size-2 has-text-weight-semibold">Josh Willis</div>
        <div className="is-size-5">Software Developer. Tournament Organizer.</div>

        <Social />
      </div>
    )
  }
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             description
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `
