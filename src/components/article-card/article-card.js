import React from "react"
import { Link } from "gatsby"

import { makeStyles } from "@material-ui/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import Chip from "@material-ui/core/Chip"
import { rhythm } from "../../utils/typography"
import kebabCase from "lodash/kebabCase"

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: rhythm(1 / 2),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  chip: {
    margin: `2px`,
  },
})

export const ArticleCard = ({ node }) => {
  const title = node.frontmatter.title || node.fields.slug
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {node.frontmatter.tags.slice(0, 3).map(tag => {
            return (
              <Link
                key={tag}
                to={`/tags/${kebabCase(tag)}`}
                style={{ boxShadow: `none` }}
              >
                <Chip
                  size="small"
                  label={`#${tag}`}
                  className={classes.chip}
                  onClick={() => {}}
                ></Chip>
              </Link>
            )
          })}
        </Typography>
        <Typography variant="h5" component="h2" data-cy="post-title">
          <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            {title}
          </Link>
        </Typography>
        <Typography
          className={classes.pos}
          variant="subtitle2"
          component="p"
          color="textSecondary"
        >
          {node.frontmatter.date}
        </Typography>

        <Typography variant="body2" component="p">
          {node.frontmatter.description || node.excerpt}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ArticleCard
