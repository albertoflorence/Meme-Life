import React, { Component } from 'react'
import AuthDialog from '../components/Auth/AuthDialog'

class AuthContainer extends Component {
  handleAuth = type => (event, input) => {
    event.preventDefault()
  }

  render() {
    return <AuthDialog onSubmit={this.handleAuth} />
  }
}

export default AuthContainer
