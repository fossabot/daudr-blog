import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"

import { Header } from "./header"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  )
})

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header location={{ pathname: `/` }} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
