import React from 'react'
import { withStyles } from 'material-ui/styles'
import { Avatar, Button, TextField } from 'material-ui'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import CircularProgress from 'material-ui/Progress/CircularProgress'
import TimeAgo from '../UI/TimeAgo'
import Reply from './Comment'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  replyButton: {
    fontSize: '11px',
    transition: '250ms',
    color: 'grey',
    '&:hover': {
      fontWeight: 'bolder',
      backgroundColor: 'transparent'
    }
  },
  viewReplyButton: {
    fontWeight: 'bolder',
    textTransform: 'capitalize',
    minHeight: '0px',
    padding: '0px',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
})

class Comment extends React.Component {
  state = {
    showReplyInput: false,
    showReplies: false,
    replyMessage: ''
  }

  openReply = () => {
    this.setState({ showReplyInput: true })
  }

  closeReply = () => {
    this.setState({ showReplyInput: false })
  }

  showRepliesHandler = commentId => () => {
    const { replies, repliesCount } = this.props.comment
    this.setState(prevState => ({ showReplies: !prevState.showReplies }))
    if (!this.props.comment.replies || repliesCount > replies.length) {
      this.props.fetchReplies(commentId)
    }
  }

  textChangeHandler = event => {
    this.setState({
      replyMessage: event.target.value
    })
  }

  renderReplies() {
    if (this.props.isFetching) return <CircularProgress />
    if (!this.state.showReplies || !this.props.comment.replies) return null
    return this.props.comment.replies.map(reply => (
      <Reply key={reply._id} comment={reply} onReply={this.props.onReply} />
    ))
  }

  render() {
    const { classes, comment, onReply } = this.props
    const { showReplies, replyMessage, showReplyInput } = this.state
    if (!comment) return null
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ display: 'inline-block', marginRight: '10px' }}>
          <Avatar src={comment.author.avatar} alt={comment.author.name}>
            {comment.author.avatar ? null : comment.author.name[0]}
          </Avatar>
        </div>
        <div
          style={{
            display: 'inline-block',
            marginBottom: '15px',
            width: '100%'
          }}
        >
          <div style={{ marginBottom: '5px' }}>
            <span style={{ marginRight: '5px' }}>{comment.author.name}</span>
            <TimeAgo date={comment.createdAt} />
          </div>
          <div>{comment.body}</div>
          <div>
            <Button className={classes.replyButton} onClick={this.openReply}>
              Responder
            </Button>
            {showReplyInput && (
              <div>
                <TextField
                  onChange={this.textChangeHandler}
                  multiline
                  fullWidth
                />
                <div style={{ textAlign: 'right', marginTop: '5px' }}>
                  <Button onClick={this.closeReply}>Cancel</Button>
                  <Button
                    raised
                    color={'primary'}
                    disabled={!replyMessage}
                    style={{ fontWeight: 'bold', marginLeft: '3px' }}
                    onClick={() => this.closeReply() || onReply(replyMessage)}
                  >
                    Reply
                  </Button>
                </div>
              </div>
            )}
            <div>
              {comment.repliesCount > 0 && (
                <Button
                  onClick={this.showRepliesHandler(comment._id)}
                  className={classes.viewReplyButton}
                >
                  {comment.repliesCount > 1
                    ? 'View all ' + comment.repliesCount + ' replies'
                    : 'View reply'}
                  {showReplies ? <ExpandLess /> : <ExpandMore />}
                </Button>
              )}
            </div>
            {this.renderReplies()}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Comment)
