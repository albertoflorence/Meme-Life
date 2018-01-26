import { AUTH_SUCCESS, AUTH_LOGOUT, API } from '../constants'
import * as authAPI from '../../services/auth'

const authSuccess = ({ user, token }) => ({
  type: AUTH_SUCCESS,
  user,
  token
})

export const logout = () => ({
  type: AUTH_LOGOUT
})

export const signIn = userInfo => ({
  type: API,
  payload: {
    label: 'auth',
    api: authAPI.signIn(userInfo),
    success: authSuccess
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
