import React from "react"
import renderer from "react-test-renderer"

import ShareButtons from "./share-buttons"

describe("ShareButtons", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ShareButtons />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
