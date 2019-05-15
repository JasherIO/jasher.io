import React from 'react'

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

export default NoScript