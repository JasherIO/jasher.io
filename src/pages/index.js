import React from "react"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const Hero = styled.div`
  ${tw`max-w-lg mt-32 mx-auto flex flex-col justify-center flex-grow`}
`

export const Title = styled.h1`
  ${tw`text-5xl lg:text-6xl font-display text-white tracking-wider`};
`

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-4xl font-body text-white`};
`

export default class IndexPage extends React.Component {
  render() {
    return (
      <Hero>
        <Helmet title={"Home"} />

        <Title>Hello, <br /> I'm Jasher!</Title>
        <Subtitle>software + esports</Subtitle>
      </Hero>
    )
  }
}
