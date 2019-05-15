import React from 'react'
import Helmet from 'react-helmet'

import Container from '../elements/Container'
import { Title } from '../elements/Titles'

function ResumePage () {
  return (
    <Container>
      <Helmet title={"Resume"} />

      <Title>Resume</Title>
    </Container>
  )
}

export default ResumePage

// export default ResumePage = () => (
//   <Title>Resume</Title>
// ) 