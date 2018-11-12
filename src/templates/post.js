import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import _ from 'lodash'
import Level from '../components/Posts/Level'

import Content, { HTMLContent } from '../components/Content'

const Image = ({ image, title }) => {
  if (!image)
    return (<></>)
  
  if (_.isString(image))
    return (
      <figure className="image">
        <img src={image} alt={title} />
      </figure>
    )

  return (
    <figure className="image">
      <Img fluid={image.childImageSharp.fluid} alt={title} style={{ overflow: "visible" }} />
    </figure>
  )
}

export const BlogPostTemplate = ({
  content,
  contentComponent,
  excerpt,
  timeToRead,
  date,
  title,
  image,
  category,
  tags,
}) => {
  const PostContent = contentComponent || Content
  const description = `${excerpt} ${tags.join(' ')}`

  return (
    <section className="section">
      <Helmet title={`${title}`}>
        <meta name="og:type" content="article" />

        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="twitter:title" content={title} />

        <meta name="description" content={description}/>
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        {image && !_.isString(image) && <meta name="og:image" content={`https://jasher.io${image.childImageSharp.fluid.src}`} />}
        {image && !_.isString(image) && <meta name="twitter:image" content={`https://jasher.io${image.childImageSharp.fluid.src}`} />}

        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={`${timeToRead} min read`} />
      </Helmet>

      <div className="container">
        <div className="columns">
          <div className="column is-offset-one-fifth is-three-fifths">
            <Image image={image} title={title} />

            <Level category={category} date={date} isLocale style={{ marginTop: "1rem" }} />

            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>

            <PostContent content={content} className="content" />
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  excerpt: PropTypes.string,
  timeToRead: PropTypes.number,
  date: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  category: PropTypes.string,
  tags: PropTypes.array,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      excerpt={post.excerpt}
      timeToRead={post.timeToRead}
      date={post.frontmatter.date}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
      category={post.frontmatter.category}
      tags={post.frontmatter.tags}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string,
      html: PropTypes.string,
      excerpt: PropTypes.string,
      timeToRead: PropTypes.number,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.object,
        ]),
        category: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
      })
    }),
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 175)
      timeToRead
      frontmatter {
        date
        title
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        category
        tags
      }
    }
  }
`
