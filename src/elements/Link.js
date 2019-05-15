import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link as GatsbyLink } from "gatsby"

const Link = styled(GatsbyLink)`
  ${tw`font-body text-white opacity-50 hover:opacity-100 no-underline`}
`

export default Link