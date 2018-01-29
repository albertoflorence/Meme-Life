import React from 'react'
import { withStyles } from 'material-ui/styles'
import { Avatar, Button, TextField } from 'material-ui'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  replayButton: {
    fontSize: '11px',
    transition: '250ms',
    color: 'grey',
    '&:hover': {
      fontWeight: 'bolder',
      backgroundColor: 'transparent'
    }
  }
})

class Comment extends React.Component {
  state = {
    showReplay: false,
    replayMessage: ''
  }

  openReplay = () => {
    this.setState({ showReplay: true })
  }

  closeReplay = () => {
    this.setState({ showReplay: false })
  }

  textChangeHandler = event => {
    this.setState({
      replayMessage: event.target.value
    })
  }

  submitCommentHandler = id => () => {
    this.props.onReplay({
      commentId: id,
      body: this.state.replayMessage
    })
  }

  render() {
    const { classes, comment } = this.props
    const { showReplay, replayMessage } = this.state
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
            {comment.author.name}
            <span
              style={{ color: 'grey', fontSize: '12px', marginLeft: '10px' }}
            >
              {comment.createdAt}
            </span>
          </div>
          <div>{comment.body}</div>
          <div>
            <Button className={classes.replayButton} onClick={this.openReplay}>
              Responder
            </Button>
            {showReplay && (
              <div>
                <TextField
                  onChange={this.textChangeHandler}
                  multiline
                  fullWidth
                />
                <div style={{ textAlign: 'right', marginTop: '5px' }}>
                  <Button onClick={this.closeReplay}>Cancel</Button>
                  <Button
                    raised
                    color={'primary'}
                    disabled={!replayMessage}
                    style={{ fontWeight: 'bold', marginLeft: '3px' }}
                    onClick={this.submitCommentHandler(comment._id)}
                  >
                    Replay
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Comment)
