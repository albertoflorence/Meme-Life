import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import logger from 'redux-logger'
import { async, localStorageMiddleware } from './middlewares'

const thunk = store => next => action =>
  typeof action === 'function' ? action(next, store.getState) : next(action)

const configureStore = () => {
  const middlewares = [logger, localStorageMiddleware, thunk, async]
  const store = createStore(reducer, applyMiddleware(...middlewares))
  return store
}

export default configureStore
