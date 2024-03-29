import React from "react"
import { Global, css } from "@emotion/core"
import "typeface-open-sans"
import "typeface-work-sans"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import Navbar from "../components/Navbar"
import NoScript from "./NoScript"
import SEO from "./SEO"

const Container = styled.div`
  ${tw`flex flex-col justify-between`}
`

library.add(faAngleLeft, faAngleRight, faGithub, faLinkedin, faTwitch, faTwitter)

const Layout = ({ children }) => (
  <div>
    <Global styles={css`
      html {
        background-color: #161719;
        overflow-y: scroll;
        ${tw`font-body text-gray-300`}
        a {
          ${tw`text-white hover:text-primary no-underline`}
        }
      }
      body, h1, h2, h3, h4, h5, h6, p, figure {
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        font-weight: normal;
      }
      h1, h2, h3, h4, h5, h6 {
        ${tw`font-display text-white`}
      }
      .markdown {
        h1, h2, h3, h4, h5, h6 {
          ${tw`mb-4`}
        }
        h4, h5, h6 {
          ${tw`uppercase`}
        }
        hr, p, figure {
          ${tw`my-4`}
        }
        a {
          ${tw`text-primary hover:text-secondary no-underline`}
        }
      }
    `} />
    <SEO />
    <Container>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </Container>
    <NoScript />
  </div>
)

export default Layout