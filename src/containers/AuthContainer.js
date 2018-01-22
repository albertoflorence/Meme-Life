import React, { Component } from 'react'
import AuthDialog from '../components/Auth/AuthDialog'

class AuthContainer extends Component {
  handleAuth = type => (event, input) => {
    event.preventDefault()
    console.log(input)
  }

  render() {
    return <AuthDialog onSubmit={this.handleAuth} test={'minharola de asa'} />
  }
}

export default AuthContainer
