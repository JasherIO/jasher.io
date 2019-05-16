import React from 'react'
import Helmet from 'react-helmet'

import { Hero } from '../elements/Container'
import { BigTitle, Subtitle } from '../elements/Titles'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Hero>
        <Helmet title={"Home"} />

        <BigTitle>Hello, <br /> I'm Jasher!</BigTitle>
        <Subtitle>software + esports</Subtitle>
      </Hero>
    )
  }
}
