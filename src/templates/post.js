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
      <Img fluid={image.childImageSharp.fluid} alt={title} />
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
  const description = `${excerpt} ${tags && tags.join(' ')}`

  return (
    <section className="section">
      <Helmet>
        
        {/* https://moz.com/blog/meta-data-templates-123 */}
        <html itemscope itemtype="http://schema.org/Article" />
        
        <title>{title}</title>
        <meta name="description" content={description}/>

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@JasherIO" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@JasherIO" />
        {image && _.isString(image) ? (
          <meta property="twitter:image" content={`https://jasher.io${image}`} />
        ) : (
          <meta property="twitter:image" content={`https://jasher.io${image.childImageSharp.fluid.src}`} />
        )}
        
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={`${timeToRead} min read`} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://jasher.io" />
        {image && _.isString(image) ? (
          <meta property="og:image" content={`https://jasher.io${image}`} />
        ) : (
          <meta property="og:image" content={`https://jasher.io${image.childImageSharp.fluid.src}`} />
        )}
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="JasherIO" />

        <meta property="article:published_time" content={date} />
        {/* <meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" /> */}
        {/* <meta property="article:section" content="Article Section" /> */}
        <meta property="article:tag" content={tags.join(' ')} />

      </Helmet>

      <div className="container" style={{ maxWidth: "800px" }}>
        <Image image={image} title={title} />

        <Level category={category} date={date} isLocale style={{ marginTop: "1rem" }} />

        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
          {title}
        </h1>

        <PostContent content={content} className="content" />
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
            fluid(maxWidth: 1000) {
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