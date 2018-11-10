import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import _ from 'lodash'
import moment from 'moment'

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

        {/* TODO: Gatsby image */}
        {/* {image && !_.isString(image) && <meta name="og:image" content={`https://jasher.io${image.childImageSharp.fluid.src}`} />} */}
        {/* {image && !_.isString(image) && <meta name="twitter:image" content={`https://jasher.io${image.childImageSharp.fluid.src}`} />} */}

        {/* TODO: authors */}
        {/* <link rel="author" href={`https://pulsarpremierleague.com${post.frontmatter.author.fields.slug}`} /> */}
        {/* <meta name="og:type" content="article" /> */}
        {/* <meta name="article:author" content={post.frontmatter.author.id} /> */}
        {/* <meta name="twitter:creator" content={post.frontmatter.author.twitter} /> */}
        {/* <meta name="author" content={post.frontmatter.author.id} /> */}

        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={`${timeToRead} min read`} />

        {/* TODO: canonical link */}
      </Helmet>

      <div className="container content">
        <div className="columns">
          <div className="column is-offset-one-fifth is-three-fifths">
            <Image image={image} title={title} />

            <div className="level is-mobile" style={{ marginLeft: "2em", marginRight: "2em" }}>
              <div className="level-left">
                <div className="level-item">
                  <Link to={`/blog/categories/${_.kebabCase(category)}`} className="tag is-rounded">
                    {category}
                  </Link>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <time dateTime={date} className="has-text-weight-light">{moment(date).fromNow()}</time>
                </div>
              </div>
            </div>

            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>

            <PostContent content={content} />
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
  image: PropTypes.string,
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
        // image: PropTypes.string,
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
