import { AUTH_SUCCESS, AUTH_LOGOUT } from '../constants'

const initialState = {
  user: null,
  token: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.user,
        token: action.token
      }
    case AUTH_LOGOUT: {
      return {
        ...state,
        user: null,
        token: null
      }
    }
    default: {
      return state
    }
  }
}

export default auth

export const getIsAuthenticated = state => !!state.token
