import React from "react"
import renderer from "react-test-renderer"

import { BlogIndex } from "./index"

describe("BlogIndex", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BlogIndex />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
