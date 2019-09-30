import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import Link from "./Link"

const Nav = styled.nav`
  ${tw`flex flex-row justify-between py-4 px-8 h-8`}
`

const TitleLink = styled(Link)`
  ${tw`text-xl`}
`

const Links = styled.div`
  ${tw`font-display text-white lowercase`}
`

const NavLink = styled(Link)`
  ${tw`mx-2`};
`

const Navbar = () => (
  <Nav>
    <TitleLink to="/">JasherIO</TitleLink>
    <Links>
      {/* <NavLink to="/about">About</NavLink> */}
      <NavLink to="/blog">Blog</NavLink>
    </Links>
  </Nav>
)

export default Navbar