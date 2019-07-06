import React from "react"
import renderer from "react-test-renderer"

import { Tags } from "./tags"

describe("Tags", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Tags />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
