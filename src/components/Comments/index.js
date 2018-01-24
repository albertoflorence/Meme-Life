import React from 'react'
import { withStyles } from 'material-ui/styles'
import { TextField, Grid } from 'material-ui'
import purple from 'material-ui/colors/purple'
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
  }
})

function Comments(props) {
  const { classes, comments } = props

  return (
    <Grid container direction="column" alignItems="stretch">
      <TextField
        defaultValue=""
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
      <div style={{ textAlign: 'right', marginTop: '5px' }}>
        <Button
          raised
          style={{
            color: 'white',
            fontWeight: 'bold',
            backgroundColor: '#4d94ff'
          }}
        >
          Post
        </Button>
      </div>

      {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </Grid>
  )
}

export default withStyles(styles)(Comments)
