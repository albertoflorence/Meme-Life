import { FETCH_POSTS } from '../../constants'

const createList = filter => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case FETCH_POSTS:
        return filter === action.filter ? action.result : state
      default:
        return state
    }
  }

  return ids
}

export default createList

export const getIds = state => state
