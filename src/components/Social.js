import React from 'react'

import config from '../data/config.json'

const Social = () => (
  <div className="has-text-centered">
    <a className="" href={`https://github.com/${config.github}`} style={{margin: "0.25rem"}}>
      <span className="icon">
        <i className="fab fa-lg fa-github" aria-hidden="true"></i>
      </span>
    </a>
    <a className="" href={`https://linked.com/in/${config.linkedin}`} style={{margin: "0.25rem"}}>
      <span className="icon">
        <i className="fab fa-lg fa-linkedin" aria-hidden="true"></i>
      </span>
    </a>
    <a className="" href={`https://twitter.com/${config.twitter}`} style={{margin: "0.25rem"}}>
      <span className="icon">
        <i className="fab fa-lg fa-twitter" aria-hidden="true"></i>
      </span>
    </a>
  </div>
)

export default Social
