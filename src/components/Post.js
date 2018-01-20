import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Card, {
  CardActions,
  CardHeader,
  CardMedia,
  CardContent
} from 'material-ui/Card'
import { Button, Typography, Avatar, Grid, Divider } from 'material-ui'
import { Share, Comment } from 'material-ui-icons'

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
    height: '500px'
  },
  mediaBody: {
    border: '1px solid rgba(0, 0, 0, 0.5)'
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
  state = {
    post: {
      title: 'Velocidade 5x maior que a da luz',
      image: 'https://leninja.com.br/wp-content/uploads/2018/01/luz.jpg',
      created_at: '1 hour ago',
      category: 'imagens',
      description:
        'asdbhsauhdsauihdsa muito engraçado !! \n best comentário ever ',
      author: {
        name: 'Alberto Florence',
        avatar:
          'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAMAAgDGAAwAAQAAAAAAAApGAAAAJDUzMmZhODNhLWExNjktNDk4OS1iZWY4LWNjNDUwMTMzNDQyNQ.jpg'
      }
    }
  }

  render() {
    const { post } = this.state
    const { classes } = this.props
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
          {post.title}
        </Typography>
        <div className={classes.mediaBody}>
          <CardMedia image={post.image} className={classes.media} />
        </div>
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
