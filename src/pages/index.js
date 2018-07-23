import React from 'react'
// import PropTypes from 'prop-types'
// import Link from 'gatsby-link'

import Social from '../components/Social'
import Navbar from '../components/Navbar'

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              Josh Willis
            </h1>
            <h2 className="subtitle">
              <div style={{marginBottom: "0.7rem"}}>Software Developer | Tournament Organizer</div>
              <Social />
            </h2>
            
          </div>
        </div>
        
      </section>
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
