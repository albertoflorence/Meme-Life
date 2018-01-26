import React, { Fragment } from 'react'
import {
  Button,
  DialogContent,
  DialogTitle,
  Dialog,
  AppBar,
  Tabs,
  Tab
} from 'material-ui'

import Login from './Login'
import Register from './Register'
import withStyles from 'material-ui/styles/withStyles'
import CircularProgress from 'material-ui/Progress/CircularProgress'
import Alert from '../UI/Alert'

const style = theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary.dark,
    justifyContent: 'center',
    marginBottom: '20px'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

class LoginDialog extends React.Component {
  state = {
    open: false,
    tabIndex: 0
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleTabChange = (_, tabIndex) => {
    this.setState({ tabIndex })
  }

  render() {
    const { tabIndex } = this.state
    const { classes, onSubmit, isLoading, error } = this.props
    return (
      <div>
        <Button onClick={this.handleClickOpen} className={classes.title}>
          Enter
        </Button>
        <Dialog
          className={classes.root}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <AppBar position="static" className={classes.toolbar}>
            <DialogTitle id="alert-dialog-title">
              <Tabs
                value={tabIndex}
                onChange={this.handleTabChange}
                className={classes.title}
              >
                <Tab label="Login" />
                <Tab label="Register" />
              </Tabs>
            </DialogTitle>
          </AppBar>
          <DialogContent>
            <Alert type="danger">{error}</Alert>
            {isLoading ? (
              <div style={{ textAlign: 'center' }}>
                {isLoading && <CircularProgress />}
              </div>
            ) : (
              <Fragment>
                {tabIndex === 0 && <Login onSubmit={onSubmit('login')} />}
                {tabIndex === 1 && <Register onSubmit={onSubmit('register')} />}
              </Fragment>
            )}
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(style)(LoginDialog)
