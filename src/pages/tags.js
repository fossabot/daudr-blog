import React from "react"
import PropTypes from "prop-types"

// Components
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Tag from "../components/tag";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout location="/tags" title="Tutti i tag">
    <SEO
      title="Tutti i tag"
      keywords={["blog", "tags", "page", "technology"]}
    />
    <div>
      <h1>Tags</h1>
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {group.map(tag => (
          <li key={tag.fieldValue} style={{ listStyle: 'none', maxWidth: '50%' }}>
            <Tag tag={tag.fieldValue} count={tag.totalCount}></Tag>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`