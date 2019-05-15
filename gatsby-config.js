const config = require('./config/site')
const colors = require('./tailwind')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    siteUrl: config.url + pathPrefix,
  },
  // pathPrefix: config.pathPrefix,
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-emotion',
    {
      // TODO: test with `yarn build`
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { 
                        slug 
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: config.rss,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsId,
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ["/admin**"],
      },
    },
    'gatsby-plugin-lodash',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JasherIO`,
        short_name: `JasherIO`,
        start_url: `/`,
        background_color: "#161719",
        theme_color: colors["primary"],
        display: `standalone`,
        icon: 'static/favicon.png'
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690
            },
          },
          'gatsby-remark-prismjs'
        ],
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
