import React from 'react'
import { withStyles } from 'material-ui/styles'
import { Drawer, MenuItem } from 'material-ui'
import NavLink from 'react-router-dom/NavLink'

const style = {
  items: {
    minWidth: '200px'
  },
  navItem: {
    color: 'black',
    textDecoration: 'none',
    textTransform: 'uppercase',
    margin: 0
  }
}

class TemporaryDrawer extends React.Component {
  render() {
    const { open, onClose, items, classes } = this.props

    return (
      <Drawer open={open} onClose={onClose}>
        {items.map(item => (
          <NavLink
            key={item.name}
            exact
            activeStyle={{
              fontWeight: 'bold'
            }}
            to={item.link}
            className={classes.navItem}
          >
            <MenuItem className={classes.items}>{item.name}</MenuItem>
          </NavLink>
        ))}
      </Drawer>
    )
  }
}

export default withStyles(style)(TemporaryDrawer)
