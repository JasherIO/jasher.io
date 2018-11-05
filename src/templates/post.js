import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Content, { HTMLContent } from '../components/Content'
import TagList from '../components/Tags/List';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  excerpt,
  timeToRead,
  image,
  title,
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

        {/* {cover && !_.isString(cover) && <meta name="og:image" content={`https://jasher.io${cover.childImageSharp.fluid.src}`} />} */}
        {/* {cover && !_.isString(cover) && <meta name="twitter:image" content={`https://jasher.io${cover.childImageSharp.fluid.src}`} />} */}

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
            { image ? (
              <figure className="image">
                <img src={image} alt="cover" />
              </figure>
            ) : null}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={content} />
            <div style={{ marginTop: `1rem` }}>
              {tags && tags.length ? (
                <TagList tags={tags} />
              ) : null}
            </div>
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
  image: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      excerpt={post.excerpt}
      image={post.frontmatter.image}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string,
      html: PropTypes.string,
      excerpt: PropTypes.string,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
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
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image
        tags
      }
    }
  }
`
