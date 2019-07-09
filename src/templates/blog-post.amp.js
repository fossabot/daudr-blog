import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import Tag from "../components/tag"

import addToMailchimp from "gatsby-plugin-mailchimp"

class AMPBlogPostTemplate extends React.Component {
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

  addMail = event => {
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
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          keywords={post.frontmatter.keywords}
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

        <div style={{ margin: rhythm(1), textAlign: `center` }}>
          <p>Vuoi rimanere sempre aggiornato sui contenuti di questo blog?</p>
          <p>
            Iscriviti alla newsletter!{" "}
            <span role="img" aria-label="sunglasses smile">
              😎
            </span>
          </p>
          <form onSubmit={this.addMail}>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
        </div>

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

        <div
          className="sharethis-inline-share-buttons"
          style={{ marginBottom: rhythm(1) }}
        />

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
      </Layout>
    )
  }
}

AMPBlogPostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    previous: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    next: PropTypes.shape({
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.array.isRequired,
      }).isRequired,
      excerpt: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired
    }).isRequired,
  }).isRequired,
}

export default AMPBlogPostTemplate

export const pageQuery = graphql`
  query AmpBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
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
