import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Tag from "../components/tag"
import ShareButtons from "../components/share-buttons"
import Disqus from "gatsby-plugin-disqus"

import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: "", data: {} }
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      email: event.target.value,
    })
  }

  handleClick = event => {
    event.preventDefault()
    addToMailchimp(this.state.email).then(data => {
      this.setState({
        email: "",
        data,
      })
    })
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteUrl = this.props.data.site.siteMetadata.siteUrl
    const siteTitle = this.props.data.site.siteMetadata.title
    const { slug, previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
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

        <div style={{ margin: rhythm(1), textAlign: `center` }}>
          <p style={{ marginBottom: 0 }}>
            Do you want to be updated when new articles are being published?
          </p>
          <p style={{ marginBottom: rhythm(1 / 2) }}>
            Join the newsletter!{" "}
            <span role="img" aria-label="sunglasses smile">
              😎
            </span>
          </p>
          <form
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              alignItems: `baseline`,
              justifyContent: `center`,
            }}
            onSubmit={this.addMail}
          >
            <TextField
              id="email"
              name="email"
              label="Email"
              margin="normal"
              variant="outlined"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Button
              onClick={this.handleClick}
              variant="outlined"
              color="primary"
              style={{ marginLeft: rhythm(1 / 2), height: `56px` }}
            >
              Add me!
            </Button>
          </form>
        </div>

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
          url={this.props.location.href}
        ></Disqus>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
