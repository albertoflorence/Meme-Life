import React, { Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import { Button, Grid, CardActions, IconButton, Badge } from 'material-ui'
import { Share, Comment, Favorite } from 'material-ui-icons'
import { Link } from 'react-router-dom'

const styles = theme => ({
  bottom: {
    padding: '40px 0 40px 0'
  },
  buttonIconSize: {
    width: 54,
    height: 54
  },
  iconSize: {
    width: 36,
    height: 36
  },
  favorite: {
    color: '#e91e63',
    width: 36,
    height: 36
  },
  badge: {
    root: {
      backgroundColor: 'rgba(0, 0, 0,  0.3)!important'
    }
  },
  commentLink: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    transition: '250ms',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  commentIcon: {
    width: '36px',
    height: '36px'
  }
})

const PostFooter = ({
  _id,
  classes,
  commentsCount,
  likesCount,
  onLike,
  onShare
}) => (
  <Fragment>
    <CardActions className={classes.bottom}>
      <Grid container justify="space-around">
        <Link to={'posts/' + _id} className={classes.commentLink}>
          <Comment className={classes.commentIcon} />
          <div
            style={{
              textAlign: 'left',
              textTransform: 'lowercase',
              marginLeft: '8px'
            }}
          >
            <div>{commentsCount}</div>
            <div>Comments</div>
          </div>
        </Link>
        <IconButton onClick={onShare}>
          <Share color="primary" className={classes.iconSize} />
        </IconButton>
        <IconButton onClick={onLike} className={classes.buttonIconSize}>
          <Badge badgeContent={likesCount} color="primary">
            <Favorite className={classes.favorite} />
          </Badge>
        </IconButton>
      </Grid>
    </CardActions>
  </Fragment>
)

export default withStyles(styles)(PostFooter)
