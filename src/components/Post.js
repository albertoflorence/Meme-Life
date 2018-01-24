import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card'
import { Button, Typography, Avatar, Grid, Divider } from 'material-ui'
import { Share, Comment } from 'material-ui-icons'
import Link from 'react-router-dom/Link'
import Content from './Content'
const styles = theme => ({
  root: {
    flexGlow: 1,
    borderRadius: '10px',
    border: '1px solid rgba(0,0,0,0.3)',
    marginBottom: '50px'
  },
  description: {
    textAlign: 'center',
    padding: '20px'
  },
  media: {
    width: '100%',
    height: 'auto'
  },
  mediaBody: {
    border: '1px solid rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box'
  },
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
  },
  bottom: {
    padding: '40px 0 40px 0'
  },
  leftIcon: {
    marginRight: '5px'
  }
})

class Post extends Component {
  render() {
    const { classes, post } = this.props
    return (
      <Card className={classes.root}>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.header}
        >
          <Grid item>
            <CardHeader
              style={{ padding: 0 }}
              title={post.author.name}
              avatar={
                <Avatar src={post.author.avatar} alt={post.author.name}>
                  {post.author.avatar ? null : post.author.name[0]}
                </Avatar>
              }
              subheader={post.created_at}
            />
          </Grid>
          <Grid item className={classes.category}>
            {post.category}
          </Grid>
        </Grid>
        <div style={{ padding: '0 70px 0px 70px' }}>
          <Divider />
        </div>
        <Typography
          style={{ padding: '18px', textAlign: 'center' }}
          type="headline"
          component="h2"
          className={classes.name}
        >
          <Link to={'/posts/' + post._id}> {post.title} </Link>
        </Typography>
        <Grid className={classes.mediaBody}>
          <Content url={post.content_url} category={post.category} />
        </Grid>
        <CardContent>
          <Typography className={classes.description}>
            {post.description}
          </Typography>
        </CardContent>
        <Divider />
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
      </Card>
    )
  }
}

export default withStyles(styles)(Post)
