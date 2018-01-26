import React, { Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import { Typography, Grid, Divider, CardContent } from 'material-ui'
import Link from 'react-router-dom/Link'
import Content from '../Content'

const styles = theme => ({
  description: {
    textAlign: 'center',
    padding: '20px'
  },

  mediaBody: {
    border: '1px solid rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box'
  },
  title: {
    textDecoration: 'none',
    fontSize: '28px',
    transition: '250ms',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
})

const PostBody = ({
  title,
  category,
  _id,
  description,
  content_url,
  classes
}) => (
  <Fragment>
    <Typography
      style={{ padding: '18px', textAlign: 'center' }}
      type="headline"
      component="h1"
      className={classes.name}
    >
      <Link to={'/posts/' + _id} className={classes.title}>
        {title}
      </Link>
    </Typography>
    <Grid className={classes.mediaBody}>
      <Content url={content_url} category={category} />
    </Grid>
    <CardContent>
      <Typography className={classes.description}>{description}</Typography>
    </CardContent>
    <Divider />
  </Fragment>
)

export default withStyles(styles)(PostBody)
