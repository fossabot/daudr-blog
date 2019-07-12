import React from "react"
import { Link } from "gatsby"

import { scale, rhythm } from "../../utils/typography"

export const Header = ({ location, title }) => {
  const rootItPath = `${__PATH_PREFIX__}/it`
  const rootEnPath = `${__PATH_PREFIX__}/en`
  let header

  if (location.pathname === rootItPath || location.pathname === rootEnPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return <header>{header}</header>
}

export default Header
