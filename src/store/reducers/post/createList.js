import { FETCH_POSTS } from '../../constants'

const createList = filter => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) return state
    switch (action.type) {
      case FETCH_POSTS:
        return action.result
      default:
        return state
    }
  }

  return ids
}

export default createList

export const getIds = state => state
