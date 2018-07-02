import React from 'react'
// import PropTypes from 'prop-types'

import config from '../data/config.json'

const Footer = () => (
  <footer className="footer" style={{marginTop: "1rem", padding: "1rem"}}>
    <div className="content has-text-centered">
      <p>
        <a className="" href={`https://github.com/${config.github}`}>
          <span className="icon">
            <i className="fab fa-lg fa-github" aria-hidden="true"></i>
          </span>
        </a>
        <a className="" href={`https://linked.com/in/${config.linkedin}`}>
          <span className="icon">
            <i className="fab fa-lg fa-linkedin" aria-hidden="true"></i>
          </span>
        </a>
        <a className="" href={`https://twitter.com/${config.twitter}`}>
          <span className="icon">
            <i className="fab fa-lg fa-twitter" aria-hidden="true"></i>
          </span>
        </a>
      </p>
      <a href="https://bulma.io">
        <img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24" />
      </a>
      <p className="is-size-7">{config.copyright}</p>
    </div>
  </footer>
)

// Footer.propTypes = {
//   gridItems: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string,
//       text: PropTypes.string,
//     })
//   ),
// }

export default Footer
