import React from 'react'
import withStyles from 'material-ui/styles/withStyles'

const style = theme => ({
  wrapper: {
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center'
  },
  success: {
    backgroundColor: '#c8e6c9 ',
    color: '#2e7d32'
  },
  danger: {
    backgroundColor: '#ffcdd2',
    color: '#c62828'
  },
  info: {
    backgroundColor: '#bbdefb',
    color: '#1565c0'
  },
  warning: {
    backgroundColor: '#ffe0b2',
    color: '#ef6c00'
  }
})

const Alert = ({ type, children, classes, ...props }) => {
  const className = [classes[type], classes.wrapper]
  if (!children) return null
  return (
    <div {...props} className={className.join(' ')}>
      {children}
    </div>
  )
}

export default withStyles(style)(Alert)
