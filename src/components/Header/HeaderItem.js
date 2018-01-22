import React from 'react'
import withStyles from 'material-ui/styles/withStyles'
import { ListItem } from 'material-ui'
import { NavLink } from 'react-router-dom'

const styles = theme => ({
  navItem: {
    color: '#ddd',
    textDecoration: 'none',
    textTransform: 'uppercase',
    margin: 0
  }
})

const Headeritem = ({ name, link = '', classes, component }) => {
  return (
    <ListItem
      button
      style={{ display: 'inline', marginRight: '15px', padding: '0px' }}
    >
      {link ? (
        <NavLink
          exact
          activeStyle={{ color: 'white', fontWeight: 'bold' }}
          className={classes.navItem}
          to={link}
        >
          {name}
        </NavLink>
      ) : (
        component
      )}
    </ListItem>
  )
}

export default withStyles(styles)(Headeritem)
