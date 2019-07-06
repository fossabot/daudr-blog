import React from "react"
import renderer from "react-test-renderer"

import { BlogPostTemplate } from "./blog-post"

describe("BlogPostTemplate", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BlogPostTemplate />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
