import React from 'react'
import Bio from '../components/Home/Bio'
import Software from '../components/Home/Software'
import Esports from '../components/Home/Esports'
// import Writing from '../components/Home/Writing'

export default class IndexPage extends React.Component {
  render() {
    return (
      <>
        <Bio />
        <Software />
        <Esports />
        {/* <Writing /> */}
      </>
    )
  }
}
