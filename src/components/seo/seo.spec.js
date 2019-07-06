import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"

import SEO from "./seo"

beforeEach(() => {
  useStaticQuery(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: "Dauðr Blog Test",
          siteUrl: "https://test.blog.daudr-me/",
          description: "Dauðr Blog: tecnologia alla portata di tutti",
          author: "Michele Da Rin Fioretto",
          twitterUserName: "MicheleDaRin",
        },
      },
    })
  )
})

describe("SEO", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SEO />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
