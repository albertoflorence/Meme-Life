import { FETCH_POSTS } from '../../constants'

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        ...action.entities.post
      }
    default: {
      return state
    }
  }
}

export default byId

export const getPost = (state, id) => state[id]
