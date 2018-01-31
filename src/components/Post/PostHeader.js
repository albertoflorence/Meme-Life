import React, { Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import { Avatar, Grid, CardHeader } from 'material-ui'
import Link from 'react-router-dom/Link'
import TimeAgo from '../UI/TimeAgo'

const styles = theme => ({
  header: {
    padding: '15px',
    paddingRight: '25px'
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  category: {
    border: '1px dashed',
    borderRadius: '10px 10px 10px 10px',
    color: '#909090',
    fontSize: '11px',
    padding: '5px 15px 5px 15px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: '250ms',
    '&:hover': {
      color: theme.palette.secondary.main,
      border: '1px solid'
    }
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
          classes={{ title: classes.title }}
          style={{ padding: 0 }}
          title={author.name}
          avatar={
            <Avatar src={author.avatar} alt={author.name}>
              {author.avatar ? null : author.name[0]}
            </Avatar>
          }
          subheader={<TimeAgo date={createdAt} />}
        />
      </Grid>
      <Link className={classes.category} to={'/posts/category/' + category}>
        {category}
      </Link>
    </Grid>
  </Fragment>
)

export default withStyles(styles)(PostHeader)
