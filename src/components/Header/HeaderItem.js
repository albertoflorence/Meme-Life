import React from 'react'
import withStyles from 'material-ui/styles/withStyles'
import { ListItem } from 'material-ui'
import { NavLink } from 'react-router-dom'
import ListItemText from 'material-ui/List/ListItemText'

const styles = theme => ({
  navItem: {
    color: '#ddd',
    textDecoration: 'none',
    textTransform: 'uppercase',
    margin: 0
  }
})

const Headeritem = ({ children, link, classes }) => {
  return (
    <ListItem
      button
      style={{ display: 'inline', marginRight: '15px', padding: '0px' }}
    >
      <NavLink
        exact
        activeStyle={{ color: 'white', fontWeight: 'bold' }}
        className={classes.navItem}
        to={link}
      >
        {children}
      </NavLink>
    </ListItem>
  )
}

export default withStyles(styles)(Headeritem)
