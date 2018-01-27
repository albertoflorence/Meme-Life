import { FETCH_POSTS, FETCH_POST, ADD_POST_COMMENT } from '../../constants'

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST:
    case FETCH_POSTS:
      return {
        ...state,
        ...action.entities.post
      }
    case ADD_POST_COMMENT:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          commentsCount: state[action.postId].commentsCount + 1,
          comments: [
            {
              ...action.comment,
              author: {
                ...action.userInfo
              }
            },
            ...state[action.postId].comments
          ]
        }
      }
    default: {
      return state
    }
  }
}

export default byId

export const getPost = (state, id) => state[id]
