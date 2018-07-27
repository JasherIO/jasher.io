const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              category
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    let tags = []
    let categories = []
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }

      if (_.get(edge, `node.frontmatter.category`)) {
        categories = categories.concat(edge.node.frontmatter.category)
      }
    })
    
    tags = _.uniq(tags)
    categories = _.uniq(categories)

    tags.forEach(filter => {
      const tagPath = `/blog/tags/${_.kebabCase(filter)}`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/filter-page.js`),
        context: {
          filter,
        },
      })
    })

    categories.forEach(filter => {
      const categoryPath = `/blog/category/${_.kebabCase(filter)}`

      createPage({
        path: categoryPath,
        component: path.resolve(`src/templates/filter-page.js`),
        context: {
          filter,
        },
      })
    })
    
  })
}

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    if (page.path === "/") {
      page.layout = "home"

      createPage(page)
    }

    resolve()
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, trailingSlash: false })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}