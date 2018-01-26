import { ASYNC_START, ASYNC_END, ASYNC_ERROR } from '../constants'

const isFetching = (state = {}, action) => {
  switch (action.type) {
    case ASYNC_START:
      return {
        ...state,
        [action.label]: true
      }
    case ASYNC_END:
    case ASYNC_ERROR:
      return {
        ...state,
        [action.label]: false
      }
    default:
      return state
  }
}

export default isFetching

export const getIsFetching = (state, label) =>
  console.log(state) || (state && state[label])
