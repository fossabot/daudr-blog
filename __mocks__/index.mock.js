export const data = {
  site: {
    siteMetadata: {
      title: "Dauðr Blog Test",
    },
  },
  allMarkdownRemark: {
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
            "The other day I published an article about the Libra Network, today we’ll see how to build a transaction on it.Libra logoInstalling the…",
          fields: {
            slug: "/libra-simple-smart-contract/",
          },
          frontmatter: {
            date: "June 24, 2019",
            title: "Write your first transaction on the Libra Network",
            description:
              "After the release of the Libra Network's testnet, we'll understand how to write simple transactions on it",
          },
        },
      },
      {
        node: {
          excerpt:
            "Recently Mark Zuckerberg has announced Facebook’s new cryptocurrency called Libra, let’s see what it is.Photo by Joshua Hoehne on…",
          fields: {
            slug: "/facebook-libra/",
          },
          frontmatter: {
            date: "June 19, 2019",
            title: "The new Facebook cryptocurrency: Libra",
            description:
              "Facebook will be releasing its new cryptocurrency in the first half of 2020. But what is Libra?",
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
