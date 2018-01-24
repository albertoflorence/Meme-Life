import React from 'react'
import { withStyles } from 'material-ui/styles'
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Avatar,
  ListItemAvatar,
  TextField
} from 'material-ui'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

class Comment extends React.Component {
  render() {
    const { classes, comment } = this.props

    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader>{comment.author.name}</ListSubheader>}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={comment.author.avatar} alt={comment.author.name}>
                {comment.author.avatar ? null : comment.author.name[0]}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <TextField
                  multiline
                  readOnly
                  value={comment.body}
                  style={{ width: '100%' }}
                />
              }
            />
          </ListItem>
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(Comment)
