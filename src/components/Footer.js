import React from 'react'
import Social from './Social'

const Footer = () => (
  <footer className="footer">
    <div className="has-text-centered">
      <Social style={{ marginBottom: "1.5rem" }} />
      <p className="content">
        <p>
          Copyright &copy; 2018-2019
        </p>
        <p>
          Made with <a href="https://bulma.io">Bulma</a> and <a href="https://www.gatsbyjs.org">Gatsby</a>. Source code available on <a href="https://github.com/JasherIO/jasherio">GitHub. </a>
        </p>
      </p>
    </div>
  </footer>
)

export default Footer