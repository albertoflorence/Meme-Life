import React, { Component } from 'react'
import { logout } from '../store/actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Logout extends Component {
  componentDidMount() {
    this.props.logout()
  }

  render() {
    return <Redirect to={'/'} />
  }
}

export default connect(null, { logout })(Logout)
