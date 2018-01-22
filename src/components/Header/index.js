import React from 'react'
import withStyles from 'material-ui/styles/withStyles'
import {
  IconButton,
  Toolbar,
  AppBar,
  Typography,
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
    backgroundColor: theme.palette.primary.dark
  },
  white: {
    color: 'white'
  },
  brand: {
    color: 'white',
    textDecoration: 'none'
  }
})

const HeaderItems = ({ items, align = 'center' }) => (
  <List style={{ textAlign: align }}>
    {items.map(item => <HeaderItem key={item.name} {...item} />)}
  </List>
)

const Header = ({ itemsCenter, itemsRight, classes }) => {
  return (
    <div className={classes.root}>
      <AppBar className={classes.toolbar} position="static">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <IconButton className={classes.menuButton} aria-label="Menu">
              <Menu className={classes.white} />
            </IconButton>
            <Typography type="title" color="inherit">
              <Link to="/" className={classes.brand}>
                Meme
              </Link>
            </Typography>
            <HeaderItems align="center" items={itemsCenter} />
            <HeaderItems align="right" items={itemsRight} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header)
