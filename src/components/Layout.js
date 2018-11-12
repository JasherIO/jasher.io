import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Navbar from './Navbar'
import Footer from './Footer'
import './all.sass'

library.add(fab)

const NoScript = () => (
  <noscript>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          #content {
            visibility: visible !important;
          }
          #nav {
            opacity: 1 !important;
            transform: translateY(0px) !important;
          }
    `,
      }}
    />
  </noscript>
)

class PureLayout extends React.Component {
  render() {

    const { children, site } = this.props

    return (
      <div>
        <Helmet defaultTitle="Jasher" titleTemplate={`%s | Jasher`}>
          <html lang="en" />
          
          <meta name="og:type" content="website" />
          
          <meta name="og:title" content={site.siteMetadata.title} />
          
          <meta name="og:site_name" content={site.siteMetadata.title} />
          {/* TODO: Pull twitter link from site metadata */}
          <meta name="twitter:site" content="@JasherIO" />

          <meta name="og:description" content={site.siteMetadata.description} />
          <meta name="description" content={site.siteMetadata.description} />
          
          {/* TODO: Canonical links */}

          {/* Bing Console */}
          {/* <meta name="msvalidate.01" content="1F070B704B750BDCFF3AA23B0EF3D993" /> */}
        </Helmet>
        
        <Navbar />
        {children}
        <Footer />
        <NoScript />
      </div>
    )
  }
}

const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        title
        alternate
        description
      }
    }
  }
`

export const Layout = props => (
  <StaticQuery query={query} render={({site}) => <PureLayout site={site} {...props} />} />
)

export default Layout