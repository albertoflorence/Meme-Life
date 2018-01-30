import React from 'react'
import Login from './Login'
import Register from './Register'
import { Grid, CircularProgress } from 'material-ui'
import withStyles from 'material-ui/styles/withStyles'
import Alert from '../UI/Alert'

const style = {
  wrapper: {
    border: '1px solid rgba(0, 0, 0, 0.3)',
    textAlign: 'center'
  },
  title: {
    margin: '15px 0 0 0'
  },
  alert: {
    marginBottom: '15px'
  }
}

const AuthPage = ({ error, isLoading, onSubmit, classes }) => {
  if (isLoading)
    return (
      <div style={{ textAlign: 'center' }}>
        <CircularProgress />
      </div>
    )
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <div className={classes.alert}>
        <Alert type="danger">{error}</Alert>
      </div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item className={classes.wrapper}>
          <h3 className={classes.title}>Login</h3>
          <Login onSubmit={onSubmit('login')} />
        </Grid>
        <Grid item className={classes.wrapper}>
          <h3 className={classes.title}>Register</h3>
          <Register onSubmit={onSubmit('register')} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(style)(AuthPage)
