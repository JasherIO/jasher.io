import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Hero = styled.section`
  ${tw`max-w-lg h-screen mx-auto flex flex-col justify-center items-center flex-grow text-center`}
  margin-top: -5rem;
`

const Title = styled.h1`
  ${tw`font-display text-white text-4xl lg:text-5xl`};
`

const Subtitle = styled.p`
  ${tw`font-display text-gray-200 text-sm lg:text-lg`};
`

const Icons = styled.p`
  ${tw`mt-3`}
`

const Icon = styled(FontAwesomeIcon)`
  ${tw`text-xl lg:text-2xl px-4`};
`

const Button = styled.a`
  ${tw`font-display font-semibold uppercase text-gray-300 text-xs lg:text-sm rounded border-solid border border-gray-100 hover:border-primary p-2 mt-8`}
`

const IndexPage = () => {
  const resume = useStaticQuery(graphql`
    {
      file(name: { eq: "resume" } ) {
        publicURL
      }
    }
  `)

  return (
    <Hero>
      <Helmet title={"Home"} />

      <Title>Hi, I'm Jasher!</Title>
      <Subtitle>Software Development & Esports Operations</Subtitle>
      <Icons>
        <OutboundLink href="https://github.com/JasherIO">
          <Icon icon={['fab', 'github']} />
        </OutboundLink>
        <OutboundLink href="https://www.linkedin.com/in/JasherIO/">
          <Icon icon={['fab', 'linkedin']} />
        </OutboundLink>
        <OutboundLink href="https://www.twitch.tv/JasherIO">
          <Icon icon={['fab', 'twitch']} />
        </OutboundLink>
        <OutboundLink href="https://www.twitter.com/JasherIO">
          <Icon icon={['fab', 'twitter']} />
        </OutboundLink>
      </Icons>

      <Button href={resume.file.publicURL}>View Resume</Button>

    </Hero>
  )
}

export default IndexPage
