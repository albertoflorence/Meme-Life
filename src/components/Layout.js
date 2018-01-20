import React from 'react'
import Grid from 'material-ui/Grid'

const Layout = ({ children }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={11} md={6}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
