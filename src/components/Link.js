import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link as GatsbyLink } from "gatsby"

const Link = styled(GatsbyLink)`
  ${tw`font-display text-gray-300 hover:text-primary no-underline`}
`

export default Link