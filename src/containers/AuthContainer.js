import React, { Component } from 'react'
import AuthDialog from '../components/Auth/AuthDialog'
import { signIn, signUp } from '../store/actions'
import { extractValueFromInput } from '../util/index'
import { connect } from 'react-redux'
import { getIsFetching, getError, getIsAuthenticated } from '../store/reducers'

class AuthContainer extends Component {
  handleAuth = type => (event, data) => {
    event.preventDefault()
    const { signIn, signUp } = this.props
    const userInfo = extractValueFromInput(data)
    if (type === 'login') {
      signIn(userInfo)
    } else if (type === 'register') {
      signUp(userInfo)
    }
  }

  render() {
    const { isLoading, error, isAuthenticated } = this.props
    if (isAuthenticated) {
      return null
    }
    return (
      <AuthDialog
        isLoading={isLoading}
        error={error}
        onSubmit={this.handleAuth}
      />
    )
  }
}

const mapStateToProps = state => ({
  isLoading: getIsFetching(state, 'auth'),
  error: getError(state, 'auth'),
  isAuthenticated: getIsAuthenticated(state)
})

export default connect(mapStateToProps, {
  signIn,
  signUp
})(AuthContainer)
