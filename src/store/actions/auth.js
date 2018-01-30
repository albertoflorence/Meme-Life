import { AUTH_SUCCESS, AUTH_LOGOUT, API } from '../constants'
import * as authAPI from '../../services/auth'

const authSuccess = ({ user, token, rememberLogin }) => ({
  type: AUTH_SUCCESS,
  user,
  token,
  rememberLogin
})

export const logout = () => ({
  type: AUTH_LOGOUT
})

export const signIn = userInfo => ({
  type: API,
  payload: {
    label: 'auth',
    api: authAPI.signIn(userInfo),
    success: res =>
      authSuccess({ ...res, rememberLogin: userInfo.rememberLogin })
  }
})

export const signUp = userInfo => ({
  type: API,
  payload: {
    api: authAPI.signUp(userInfo),
    success: authSuccess,
    label: 'auth'
  }
})

export const signInWithToken = token => ({
  type: API,
  payload: {
    api: authAPI.signInWithToken(token),
    success: authSuccess,
    label: 'autoSignin'
  }
})
