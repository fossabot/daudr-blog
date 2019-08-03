export const data = {
  site: {
    siteMetadata: {
      title: "Dauðr Blog Test",
    },
  },
  allMarkdownRemark: {
    totalCount: 2,
    edges: [
      {
        node: {
          excerpt:
            "When dealing with lists in templates, ngFor saves us a lot of time, but it could be a real pain if used wrong, read this article to know how…",
          fields: {
            slug: "/ngfor-done-right/",
          },
          frontmatter: {
            date: "July 04, 2019",
            title: "ngFor Done Right",
            description:
              "When dealing with lists in templates, ngFor saves us a lot of time, but it could be a real pain if used wrong, read this article to know hot use it right",
          },
        },
      },
      {
        node: {
          excerpt:
            "If you have a project that’s based on Angular v7 and don’t have the chance to upgrade to the upcoming v8 or you want to test one of the most…",
          fields: {
            slug: "/conditional-polyfills/",
          },
          frontmatter: {
            date: "May 18, 2019",
            title: "Conditional Polyfill in Angular v7",
            description:
              "How to enable conditional polyfills loading in an Angular v7 project",
          },
        },
      },
    ],
  },
}
