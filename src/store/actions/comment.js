import { REPLAY_COMMENT, API } from '../constants'
import * as commentAPI from '../../services/comment'

const replayCommentSuccess = response => ({
  type: REPLAY_COMMENT,
  response
})

export const replayComment = data => ({
  type: API,
  payload: {
    label: 'replayComment',
    api: commentAPI.replayComment(data),
    success: replayCommentSuccess
  }
})
