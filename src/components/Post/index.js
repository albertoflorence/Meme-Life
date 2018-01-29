import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import { Card, Divider } from 'material-ui'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import { likePost } from '../../store/actions'
import { connect } from 'react-redux'

const styles = theme => ({
  root: {
    flexGlow: 1,
    borderRadius: '10px',
    border: '1px solid rgba(0,0,0,0.3)',
    marginBottom: '50px'
  }
})

class Post extends Component {
  handleLike = () => {
    const postId = this.props.post._id
    this.props.likePost({ postId })
  }

  handleShare = () => {}

  render() {
    const { classes, post } = this.props
    const {
      author,
      category,
      createdAt,
      description,
      _id,
      content_url,
      title,
      comments,
      commentsCount,
      likesCount,
      liked,
      disliked
    } = post

    return (
      <Card className={classes.root}>
        <PostHeader category={category} createdAt={createdAt} author={author} />
        <div style={{ padding: '0 70px 0px 70px' }}>
          <Divider />
        </div>
        <PostBody
          title={title}
          description={description}
          _id={_id}
          content_url={content_url}
          category={category}
        />
        <Divider />
        <PostFooter
          _id={_id}
          likesCount={likesCount}
          commentsCount={commentsCount}
          comments={comments}
          liked={liked}
          disliked={disliked}
          onShare={this.handleShare}
          onLike={this.handleLike}
        />
      </Card>
    )
  }
}

export default connect(null, { likePost })(withStyles(styles)(Post))
