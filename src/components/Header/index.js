import React, { Component } from 'react'
import withStyles from 'material-ui/styles/withStyles'
import {
  IconButton,
  Toolbar,
  AppBar,
  Typography,
  Button,
  List,
  Grid
} from 'material-ui'
import { Menu } from 'material-ui-icons'
import { Link } from 'react-router-dom'
import HeaderItem from './HeaderItem'

const styles = theme => ({
  root: {
    marginBottom: '80px'
  },
  toolbar: {
    backgroundColor: '#24292e'
  },
  flex: {
    flex: 1
  },
  white: {
    color: 'white'
  },
  brand: {
    color: 'white',
    textDecoration: 'none'
  }
})

class Header extends Component {
  state = {
    user: {
      name: 'Alberto Florence',
      email: 'alberto.sabatier@gmail.com',
      role: {
        description: 'admin',
        level: 0
      }
    },
    navItems: [
      { name: 'IMAGES', link: '/posts/category/images' },
      { name: 'videos', link: '/posts/category/videos' },
      { name: 'gifs', link: '/posts/category/gifs' },
      { name: 'login', link: '/login' }
    ]
  }
  render() {
    const { classes } = this.props
    const { user, navItems } = this.state
    return (
      <div className={classes.root}>
        <AppBar className={classes.toolbar} position="static">
          <Toolbar>
            <Grid container justify="space-around" alignItems="center">
              <IconButton className={classes.menuButton} aria-label="Menu">
                <Menu className={classes.white} />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                <Link to="/" className={classes.brand}>
                  Meme
                </Link>
              </Typography>
              <List>
                {navItems.map(item => (
                  <HeaderItem key={item.name} link={item.link}>
                    {item.name}
                  </HeaderItem>
                ))}
              </List>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
