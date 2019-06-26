module.exports = {
  siteMetadata: {
    title: `Dauðr Blog`,
    author: `Michele Da Rin Fioretto`,
    description: `Dauðr Blog: tecnologia alla portata di tutti`,
    siteUrl: `https://blog.daudr.me`,
    twitterUserName: "MicheleDaRin",
    social: [
      {
        social: `Facebook`,
        link: `https://www.facebook.com/micheleedarin`,
      },
      {
        social: `LinkedIn`,
        link: `https://www.linkedin.com/in/micheleedarin`,
      },
      {
        social: `Github`,
        link: `https://www.github.com/Daudr`,
      },
      {
        social: `Instagram`,
        link: `https://www.instagram.com/micheleedarin`,
      },
      {
        social: `Twitter`,
        link: `https://www.twitter.com/MicheleDaRin`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-45433517-6`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dauðr Blog`,
        short_name: `Dauðr Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `content/assets/daudr-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        analytics: {
          type: "gtag",
          dataCredentials: "include",
          config: {
            vars: {
              gtag_id: `UA-45433517-6`,
              config: {
                "UA-45433517-6": {
                  page_location: "{{pathname}}",
                },
              },
            },
          },
        },
        canonicalBaseUrl: "https://blog.daudr.me/",
        components: ["amp-form", "amp-ad", "amp-auto-ads"],
        excludedPaths: ["/404*", "/"],
        pathIdentifier: "amp/",
        relAmpHtmlPattern: "{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}",
        relCanonicalPattern: `{{canonicalBaseUrl}}{{pathname}}`,
        useAmpClientIdApi: true,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Daudr Blog's RSS",
            match: "^/blog/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `daudr-blog`,
      },
    },
  ],
}
