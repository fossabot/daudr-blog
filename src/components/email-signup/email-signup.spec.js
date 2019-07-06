import React from "react"
import renderer from "react-test-renderer"

import EmailSignup from "./email-signup"

describe("EmailSignup", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<EmailSignup />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
