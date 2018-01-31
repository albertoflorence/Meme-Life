import { ASYNC_START, ASYNC_END, ASYNC_ERROR } from '../constants'

const error = (state = {}, action) => {
  switch (action.type) {
    case ASYNC_END:
    case ASYNC_START:
      return {
        ...state,
        [action.label]: null
      }
    case ASYNC_ERROR:
      return {
        ...state,
        [action.label]: action.error.message || action.error
      }
    default:
      return state
  }
}

export default error

export const getError = (state, label) => state && state[label]
