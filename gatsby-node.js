const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const toTemplate = (edge) => {
  const id = edge.node.id
  return {
    path: edge.node.fields.slug,
    component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
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

const toTagTemplate = (tag) => {
  const tagPath = `/blog/tags/${_.kebabCase(tag)}/`
  return {
    path: tagPath,
    component: path.resolve(`src/templates/tags.js`),
    context: {
      tag,
    },
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { in: ["post"] } }}
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              category
              tags
            }
          }
        }
        tags: distinct(field: frontmatter___tags)
        categories: distinct(field: frontmatter___category)
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    _.each(posts, edge => createPage(toTemplate(edge)))

    const categories = result.data.allMarkdownRemark.categories
    _.each(categories, category => createPage(toCategoryTemplate(category)))

    const tags = result.data.allMarkdownRemark.tags
    _.each(tags, tag => createPage(toTagTemplate(tag)))

  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, trailingSlash: false })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}