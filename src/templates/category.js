import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import PostList from '../components/Posts/List'

class CategoryRoute extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.posts
    const { group: categories } = data.categories
    const category = this.props.pageContext.category

    return (
      <section className="section">
        <Helmet title={`${category} | Category`} />
        <PostList title={category} posts={posts} categories={categories} />
      </section>
    )
  }
}

export default CategoryRoute

export const categoryPageQuery = graphql`
  query CategoryPageQuery($category: String) {
    posts: allMarkdownRemark(
      limit: 100
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          ...PostItemFragment
        }
      }
    }
    categories: allMarkdownRemark(
      limit: 100
      filter: { frontmatter: { templateKey: { eq: "post" } }}
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
