import React from 'react'

const Bio = ({ ...props }) => (
  <section className="section is-medium has-text-centered has-background-secondary" {...props}>
    <div className="container">
      <h1 className="title is-3 has-text-white">
        Hi! I'm Josh!
      </h1>
      <h1 className="subtitle is-5 has-text-white">
        I am a software developer with an interest in technology, video games, and esports.
      </h1>
    </div>
  </section>
)

export default Bio