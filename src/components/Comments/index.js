import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import { TextField, Grid } from 'material-ui'
import Button from 'material-ui/Button/Button'
import Comment from './Comment'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3
    }
  },
  textFieldInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  },
  textFieldFormLabel: {
    fontSize: 18
  },
  buttonPost: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#4d94ff'
  },
  buttonPostWrapper: {
    textAlign: 'right',
    marginTop: '5px'
  }
})

class Comments extends Component {
  state = {
    comment: ''
  }
  textChangeHandler = event => {
    this.setState({
      comment: event.target.value
    })
  }

  handleSubmit = () => {
    this.props.onSubmitComment(this.state.comment)
    this.setState({
      comment: ''
    })
  }

  render() {
    const { classes, comments } = this.props
    const { comment } = this.state
    return (
      <Grid container direction="column" alignItems="stretch">
        <TextField
          value={comment}
          onChange={this.textChangeHandler}
          multiline
          rows={3}
          placeholder="Enter your comments here."
          InputProps={{
            disableUnderline: true,
            classes: {
              root: classes.textFieldRoot,
              input: classes.textFieldInput
            }
          }}
          InputLabelProps={{
            shrink: true,
            className: classes.textFieldFormLabel
          }}
        />
        <div className={classes.buttonPostWrapper}>
          <Button
            raised
            className={classes.buttonPost}
            disabled={comment.length === 0}
            onClick={this.handleSubmit}
          >
            Post
          </Button>
        </div>

        {comments.map(comment => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </Grid>
    )
  }
}

export default withStyles(styles)(Comments)
