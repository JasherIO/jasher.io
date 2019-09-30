import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import _ from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Container from "../components/Container"
import Link from "../components/Link"

const Section = styled.section`
  ${tw`text-left mb-10`}
`

// const Date = styled.time`
//   ${tw`text-sm font-body text-white opacity-50 mb-1`};
// `

const Title = styled.h1`
  ${tw`text-2xl font-display font-light mb-2`};
`

const Excerpt = styled.p`
  ${tw`text-gray-300 text-sm`}
`

const Item = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const excerpt = node.excerpt

  return (
    <Section>
      <Title><Link to={node.fields.slug}>{title}</Link></Title>
      <Excerpt>{excerpt}</Excerpt>
    </Section>
  )
}

const Flex = styled.div`
  ${tw`flex justify-center mt-8 mb-8`}
`

const FlexItem = styled.div`
  ${tw`font-body text-gray-300 text-center px-4 py-2 m-2`}
`

const Posts = ({ data, pageContext }) => {
  const { currentPage, numPages, category } = pageContext

  const pathPrefix = (category === '') ? `/blog` : `/blog/${_.kebabCase(category)}`
  const title = (category === '') ? "Blog" : category

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `${pathPrefix}` : `${pathPrefix}/${(currentPage - 1).toString()}`
  const nextPage = `${pathPrefix}/${(currentPage + 1).toString()}`

  return (
    <Container>
      <Helmet title={title} />

      {_.map(data.allMarkdownRemark.edges, ({ node }) => <Item key={node.fields.slug} node={node} />)}

      <Flex>
        <FlexItem>
          {!isFirst && <Link to={prevPage}><FontAwesomeIcon icon="angle-left" /></Link>}
        </FlexItem>
        <FlexItem>
          {currentPage}
        </FlexItem>
        <FlexItem>
          {!isLast && <Link to={nextPage}><FontAwesomeIcon icon="angle-right" /></Link>}
        </FlexItem>
      </Flex>
    </Container>
  )
}

export default Posts

export const postsQuery = graphql`
  query postsQuery($skip: Int!, $limit: Int!, $category: String) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } draft: { ne: true } } }
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            category
            date
          }
          excerpt
        }
      }
    }
  }
`