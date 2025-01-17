import React from "react"
import { Link, graphql } from "gatsby"

import Disqus from "gatsby-plugin-disqus"

import { rhythm, scale } from "../../utils/typography"

import Bio from "../../components/bio/bio"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/seo"
import Tag from "../../components/tag/tag"
import ShareButtons from "../../components/share-buttons/share-buttons"
import EmailSignup from "../../components/email-signup/email-signup"

export const AMPBlogPostTemplate = ({ data, location, pageContext }) => {
  const post = data.markdownRemark
  const siteUrl = data.site.siteMetadata.siteUrl
  const siteTitle = data.site.siteMetadata.title
  const { slug, previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        keywords={post.frontmatter.keywords}
        post={post}
        postSEO
        slug={slug}
      />
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />

      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-evenly`,
          flexWrap: "wrap",
          marginBottom: rhythm(1),
        }}
      >
        {post.frontmatter.tags.map(tag => {
          return <Tag tag={tag} key={tag} />
        })}
      </div>

      <ShareButtons postNode={post} url={`${siteUrl}${slug}`} />

      <EmailSignup />

      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>

      <Disqus
        identifier={post.frontmatter.id}
        title={post.frontmatter.title}
        url={location.href}
      ></Disqus>
    </Layout>
  )
}

export default AMPBlogPostTemplate

export const pageQuery = graphql`
  query AMPBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        keywords
        tags
      }
    }
  }
`
