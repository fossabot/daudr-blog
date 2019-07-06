import React from "react"
import renderer from "react-test-renderer"

import { TagsPage } from "./tags"

describe("TagsPage", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TagsPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
