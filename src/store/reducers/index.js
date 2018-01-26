import { combineReducers } from 'redux'
import auth, * as fromAuth from './auth'
import error, * as fromError from './error'
import isFetching, * as fromIsFetching from './isFetching'

const rootReducer = combineReducers({
  auth,
  error,
  isFetching
})

export default rootReducer

export const getIsFetching = ({ isFetching }, label) =>
  fromIsFetching.getIsFetching(isFetching, label)

export const getError = ({ error }, label) => fromError.getError(error, label)

export const getIsAuthenticated = ({ auth }) =>
  fromAuth.getIsAuthenticated(auth)