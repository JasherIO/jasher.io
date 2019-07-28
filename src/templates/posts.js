import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import _ from "lodash"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import moment from "moment"

import Container from "../components/Container"
import Link from "../components/Link"

const Section = styled.section`
  ${tw`text-center mb-10`}
`

const Date = styled.time`
  ${tw`text-sm font-body text-white opacity-50 mb-1`};
`

const Title = styled.h1`
  ${tw`text-2xl font-semibold mb-1`};
`

const TitleLink = styled(Link)`
  ${tw`font-display opacity-75`}
`

const Category = styled.h3`
  ${tw`text-xs font-display font-light mb-1`};
`

const CategoryLink = styled(Link)`
  ${tw`uppercase`}
`

const Item = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug

  return (
    <Section>
      <Date datetime={node.frontmatter.date}>{moment(node.frontmatter.date).format("LL")}</Date>
      <Title><TitleLink to={node.fields.slug}>{title}</TitleLink></Title>
      <Category><CategoryLink to={`/blog/${_.kebabCase(node.frontmatter.category)}`}>{node.frontmatter.category}</CategoryLink></Category>
    </Section>
  )
}

const Flex = styled.div`
  ${tw`flex justify-center mt-8 mb-8`}
`

const FlexItem = styled.div`
  ${tw`font-body text-grey-light opacity-50 text-center px-4 py-2 m-2`}
`

const FlexLink = styled(Link)`
  ${tw`text-white opacity-50 hover:opacity-100 no-underline`}
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
          {!isFirst && <FlexLink to={prevPage}><FontAwesomeIcon icon="angle-left" /></FlexLink>}
        </FlexItem>
        <FlexItem>
          {currentPage}
        </FlexItem>
        <FlexItem>
          {!isLast && <FlexLink to={nextPage}><FontAwesomeIcon icon="angle-right" /></FlexLink>}
        </FlexItem>
      </Flex>
    </Container>
  )
}

export default Posts

export const postsQuery = graphql`
  query postsQuery($skip: Int!, $limit: Int!, $category: String) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
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
        }
      }
    }
  }
`