import React, { Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import { Typography, Avatar, Grid, Divider, CardHeader } from 'material-ui'
import Link from 'react-router-dom/Link'

const styles = theme => ({
  header: {
    padding: '15px',
    paddingRight: '25px'
  },
  category: {
    border: '1px solid rgba(0, 0, 0, 0.3)',
    borderRadius: '10px 10px 10px 10px',
    height: 'max-content',
    textTransform: 'uppercase',
    color: 'grey',
    fontSize: '11px'
  }
})

const PostHeader = ({ author, createdAt, category, classes }) => (
  <Fragment>
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.header}
    >
      <Grid item>
        <CardHeader
          style={{ padding: 0 }}
          title={author.name}
          avatar={
            <Avatar src={author.avatar} alt={author.name}>
              {author.avatar ? null : author.name[0]}
            </Avatar>
          }
          subheader={createdAt}
        />
      </Grid>
      <Grid item className={classes.category}>
        {category}
      </Grid>
    </Grid>
  </Fragment>
)

export default withStyles(styles)(PostHeader)
