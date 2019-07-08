import React from "react"
import renderer from "react-test-renderer"

import EmailSignup from "./email-signup"
import { testHook } from "../../utils/test-utils";

let invalidEmail

describe("EmailSignup", () => {
  beforeEach(() => {
    testHook(() => {
      
    })
  })

  it("renders correctly", () => {
    const tree = renderer
      .create(<EmailSignup />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
