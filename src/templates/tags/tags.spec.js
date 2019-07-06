import React from "react"
import renderer from "react-test-renderer"

import { Tags } from "./tags"

import { data } from "../../../__mocks__/tags-template.mock"

describe("Tags", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Tags pageContext={{ tag: `angular` }} data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
