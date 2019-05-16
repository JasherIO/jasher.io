import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Link from '../elements/Link'

const Nav = styled.nav`
  ${tw`flex flex-row justify-between items-center bg-dark p-6 fixed pin-x pit-t z-10`}
`

const NavLink = styled(Link)`
  ${tw`uppercase ml-2 mr-2`};
`

const Links = () => (
  <div>
    <NavLink to="/" activeStyle={{ opacity: "100" }}>Home</NavLink>
    <NavLink to="/blog" activeStyle={{ opacity: "100" }}>Blog</NavLink>
    {/* <NavLink to="/resume" activeStyle={{ opacity: "100" }}>Resume</NavLink> */}
  </div>
)

const Icon = styled(FontAwesomeIcon)`
  ${tw`text-base text-white opacity-50 hover:opacity-100 mr-2 ml-2`};
`

const Icons = () => (
  <div>
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
  </div>
)

const Navbar = () => (
  <Nav>
    <Links />
    <Icons />
  </Nav>
)

export default Navbar