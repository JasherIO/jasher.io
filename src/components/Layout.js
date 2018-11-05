import React from 'react'
import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Navbar from './Navbar'
// import Footer from '../Footer'
import './all.sass'

library.add(fab)

// const NoScript = () => (
//   <noscript>
//     <style
//       dangerouslySetInnerHTML={{
//         __html: `
//           #content {
//             visibility: visible !important;
//           }
//           #nav {
//             opacity: 1 !important;
//             transform: translateY(0px) !important;
//           }
//     `,
//       }}
//     />
//   </noscript>
// )

class Layout extends React.Component {
  render() {

    const { children } = this.props

    return (
      <div>
        <Helmet defaultTitle="Jasher" titleTemplate={`%s | Jasher`}>
        </Helmet>
        
        <Navbar />
        {children}
        {/* <Footer /> */}

        {/* <NoScript /> */}
      </div>
    )
  }
}

export default Layout