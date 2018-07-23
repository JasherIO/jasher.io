import React from 'react'

import config from '../data/config.json'

const Icon = ({ link, icon }) => (
  <a className="" href={`${link}`} style={{margin: "0.35rem"}}>
    <span className="icon">
      <i className={`fab fa-lg ${icon}`} aria-hidden="true"></i>
    </span>
  </a>
)

const Social = () => (
  <div className="has-text-centered">
    <Icon link={`https://github.com/${config.github}`} icon="fa-github" />
    <Icon link={`https://linked.com/in/${config.linkedin}`} icon="fa-linkedin" />
    <Icon link={`https://twitter.com/${config.twitter}`} icon="fa-twitter" />
  </div>
)

export default Social
