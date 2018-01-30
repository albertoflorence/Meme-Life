import {
  FETCH_COMMENTS,
  FETCH_COMMENT,
  ADD_POST_COMMENT,
  REPLY_COMMENT
} from '../../constants'

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        ...action.entities.comment
      }
    case FETCH_COMMENT: {
      const { commentId, response } = action
      return {
        ...state,
        [commentId]: response
      }
    }
    case ADD_POST_COMMENT:
      const { comment } = action
      return {
        ...state,
        [comment._id]: {
          ...comment,
          author: {
            ...action.userInfo
          }
        }
      }
    case REPLY_COMMENT: {
      const { commentId, response, userInfo } = action
      const replies = state[commentId].replies || []
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          repliesCount: state[commentId].repliesCount + 1,
          replies: [
            ...replies,
            {
              ...response,
              author: {
                ...userInfo
              }
            }
          ]
        }
      }
    }
    default: {
      return state
    }
  }
}

export default byId

export const getPost = (state, id) => state[id]
