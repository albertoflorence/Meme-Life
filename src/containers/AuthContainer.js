import React, { Component } from 'react'
import AuthDialog from '../components/Auth/AuthDialog'
import AuthPage from '../components/Auth/AuthPage'
import { signIn, signUp } from '../store/actions'
import { extractValueFromInput } from '../util/index'
import { connect } from 'react-redux'
import { getIsFetching, getError, getIsAuthenticated } from '../store/reducers'
import Redirect from 'react-router-dom/Redirect'

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
    const { isLoading, error, isAuthenticated, RenderAuth } = this.props
    if (isAuthenticated) {
      return this.props.redirect()
    }
    return (
      <RenderAuth
        isLoading={isLoading}
        error={error}
        onSubmit={this.handleAuth}
      />
    )
  }
}

const mapStateToProps = (state, { match }) => {
  return {
    isLoading: getIsFetching(state, 'auth'),
    error: getError(state, 'auth'),
    isAuthenticated: getIsAuthenticated(state),
    RenderAuth: match ? AuthPage : AuthDialog,
    redirect: () => (match ? <Redirect to="/" /> : null)
  }
}

export default connect(mapStateToProps, {
  signIn,
  signUp
})(AuthContainer)
