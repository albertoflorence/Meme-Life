import React, { Component, Fragment } from 'react'
import { withStyles } from 'material-ui/styles'
import { TextField } from 'material-ui'
import Button from 'material-ui/Button/Button'

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
    fontWeight: 'bold'
  },
  buttonPostWrapper: {
    textAlign: 'right',
    marginTop: '5px'
  }
})

class CommentTextInput extends Component {
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
    const { classes } = this.props
    const { comment } = this.state
    return (
      <Fragment>
        <TextField
          fullWidth
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
            color={'primary'}
            raised
            className={classes.buttonPost}
            disabled={comment.length === 0}
            onClick={this.handleSubmit}
          >
            Post
          </Button>
        </div>
      </Fragment>
    )
  }
}

export default withStyles(styles)(CommentTextInput)
