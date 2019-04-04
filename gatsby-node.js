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

const toPostTemplate = (edge) => {
  const id = edge.node.id
  return {
    path: edge.node.fields.slug,
    component: path.resolve(`src/templates/post.js`),
    context: {
      id,
    },
  }
}

const toCategoryTemplate = (category) => {
  const categoryPath = `/blog/categories/${_.kebabCase(category)}/`
  return {
    path: categoryPath,
    component: path.resolve(`src/templates/category.js`),
    context: {
      category,
    },
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
        categories: distinct(field: frontmatter___category)
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    _.each(posts, edge => createPage(toPostTemplate(edge)))

    const categories = result.data.allMarkdownRemark.categories
    _.each(categories, category => createPage(toCategoryTemplate(category)))
  })
}
