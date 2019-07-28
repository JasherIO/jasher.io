import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { OutboundLink } from "gatsby-plugin-google-analytics"

import Link from "../components/Link"

const Nav = styled.nav`
  ${tw`flex flex-row justify-end items-center py-4 px-8 h-8`}
`

const NavLink = styled(Link)`
  ${tw`uppercase font-display mx-2 text-white`};
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

// const Icons = () => (
//   <div>
//     <OutboundLink href="https://github.com/JasherIO">
//       <Icon icon={['fab', 'github']} />
//     </OutboundLink>
//     <OutboundLink href="https://www.linkedin.com/in/JasherIO/">
//       <Icon icon={['fab', 'linkedin']} />
//     </OutboundLink>
//     <OutboundLink href="https://www.twitch.tv/JasherIO">
//       <Icon icon={['fab', 'twitch']} />
//     </OutboundLink>
//     <OutboundLink href="https://www.twitter.com/JasherIO">
//       <Icon icon={['fab', 'twitter']} />
//     </OutboundLink>
//   </div>
// )

const Navbar = () => (
  <Nav>
    {/* <Icons /> */}
    <Links />
  </Nav>
)

export default Navbar