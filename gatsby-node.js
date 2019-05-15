const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // https://github.com/gatsbyjs/gatsby/issues/8195
    if (node && node.frontmatter && node.frontmatter.image
      && (node.frontmatter.image.indexOf('/img') === 0)) {

      node.frontmatter.image = path.relative(
        path.dirname(node.fileAbsolutePath),
        path.join(__dirname, '/static/', node.frontmatter.image)
      )
    }

    const value = createFilePath({ node, getNode, trailingSlash: false })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
        categories: group (field: frontmatter___category) {
          totalCount
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const postPages = _.map(result.data.allMarkdownRemark.edges, ({ node }) => {
      const { id } = node
      return {
        path: node.fields.slug,
        component: path.resolve(`src/templates/post.js`),
        context: {
          id,
        },
      }
    })

    const postsPerPage = 10
    let numPages = Math.ceil(postPages.length / postsPerPage)
    const blogPages = _.map(_.range(numPages), i => {
      return {
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/posts.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      }
    })

    const categoryPages = _.flatMap(result.data.allMarkdownRemark.categories, ({ totalCount, fieldValue }) => {
      numPages = Math.ceil(totalCount / postsPerPage)
      const category = fieldValue
      const slug = _.kebabCase(category)

      return _.map(_.range(numPages), i => {
        return {
          path: i === 0 ? `/blog/${slug}` : `/blog/${slug}/${i + 1}`,
          component: path.resolve("./src/templates/posts.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            category
          },
        }
      })
    })

    const pages = _.concat(postPages, blogPages, categoryPages)
    _.forEach(pages, page => createPage(page))
  })
}
