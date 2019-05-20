import React, { useState } from "react"

import "../styles/tag.css"
import { Link } from "gatsby"

function Tag({ tag }) {
  const [hover, setHover] = useState(false);

  const hoverOn = () => { setHover(true) }
  const hoverOff = () => { setHover(false) }

  return (
    <div
      style={{
        cursor: `pointer`,
        padding: `5px 10px`,
        border: `1px dashed black`
      }}
      className={hover ? `tag-hovered` : ``}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
          
        }}
        to={`/tags/${tag}`}
      >
      {tag}
      </Link>
    </div>
  )
}

export default Tag
