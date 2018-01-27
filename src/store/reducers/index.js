import { combineReducers } from 'redux'
import auth, * as fromAuth from './auth'
import error, * as fromError from './error'
import isFetching, * as fromIsFetching from './isFetching'
import post, * as fromPost from './post'

const rootReducer = combineReducers({
  auth,
  post,
  error,
  isFetching
})

export default rootReducer

export const getIsFetching = ({ isFetching }, label) =>
  fromIsFetching.getIsFetching(isFetching, label)

export const getError = ({ error }, label) => fromError.getError(error, label)

export const getIsAuthenticated = ({ auth }) =>
  fromAuth.getIsAuthenticated(auth)

export const getPosts = ({ post }, filter) => fromPost.getPosts(post, filter)

export const getPost = ({ post }, id) => fromPost.getPost(post, id)
