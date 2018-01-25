import React, { Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import { Button, Grid, CardActions } from 'material-ui'
import { Share, Comment } from 'material-ui-icons'

const styles = theme => ({
  bottom: {
    padding: '40px 0 40px 0'
  },
  leftIcon: {
    marginRight: '5px'
  }
})

const PostFooter = ({ _id, classes }) => (
  <Fragment>
    <CardActions className={classes.bottom}>
      <Grid container justify="space-around">
        <Button color="primary">
          <Comment />
          <div
            style={{
              textAlign: 'left',
              textTransform: 'lowercase',
              marginLeft: '8px'
            }}
          >
            <div>0</div>
            <div>Comments</div>
          </div>
        </Button>
        <Button raised color="primary">
          <Share className={classes.leftIcon} />
          Twitter
        </Button>
      </Grid>
    </CardActions>
  </Fragment>
)

export default withStyles(styles)(PostFooter)
