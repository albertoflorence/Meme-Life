import { AUTH_SUCCESS, AUTH_LOGOUT, API } from './constants'
import { asyncError, asyncStart, asyncEnd } from './actions'

export const async = ({ dispatch, getState }) => next => action => {
  if (action.type !== API) return next(action)
  const { api, success, label } = action.payload

  dispatch(asyncStart(label))
  return api.then(
    data => {
      dispatch(asyncEnd(label))
      return dispatch(success(data))
    },
    error => dispatch(asyncError(error, label))
  )
}

export const localStorageMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  if (action.type === AUTH_SUCCESS) {
    localStorage.setItem('token', action.token)
  } else if (action.type === AUTH_LOGOUT) {
    localStorage.setItem('token', null)
  }
  next(action)
}
