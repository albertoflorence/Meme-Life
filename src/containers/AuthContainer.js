import React, { Component } from 'react'
import AuthDialog from '../components/Auth/AuthDialog'
import { signIn, signUp } from '../services/auth'
import { extractValueFromInput } from '../util/index'

class AuthContainer extends Component {
  handleAuth = type => (event, data) => {
    const userInfo = extractValueFromInput(data)
    event.preventDefault()
    if (type === 'login') {
      signIn(userInfo)
    } else if (type === 'register') {
      signUp(userInfo)
    }
  }

  render() {
    return <AuthDialog onSubmit={this.handleAuth} />
  }
}

export default AuthContainer
