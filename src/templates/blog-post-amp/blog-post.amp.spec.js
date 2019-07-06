import React from "react"
import renderer from "react-test-renderer"

import { AMPBlogPostTemplate } from "./blog-post.amp"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
