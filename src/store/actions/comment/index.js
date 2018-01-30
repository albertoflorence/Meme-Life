import {
  REPLY_COMMENT,
  API,
  FETCH_COMMENTS,
  FETCH_COMMENT,
  ADD_POST_COMMENT
} from '../../constants'
import {
  getCommentById,
  getComments,
  createComment,
  replyComment
} from '../../../services/comment'

import { commentSchemaList } from './schema'
import { normalize } from 'normalizr'

export const addComment = (commentInfo, userInfo) => ({
  type: API,
  payload: {
    api: createComment(commentInfo),
    success: response => ({
      type: ADD_POST_COMMENT,
      comment: response,
      postId: commentInfo.postId,
      userInfo
    }),
    label: 'addComment'
  }
})

export const addReplyComment = ({ commentId, body }, userInfo) => ({
  type: API,
  payload: {
    label: 'replyComment',
    api: replyComment({ commentId, body }),
    success: response => ({
      type: REPLY_COMMENT,
      response,
      userInfo,
      commentId
    })
  }
})

export const fetchComments = postId => ({
  type: API,
  payload: {
    api: getComments(postId),
    success: response => ({
      type: FETCH_COMMENTS,
      postId,
      ...normalize(response, commentSchemaList)
    }),
    label: 'comments'
  }
})

export const fetchReplies = commentId => ({
  type: API,
  payload: {
    api: getCommentById(commentId),
    success: response => ({
      type: FETCH_COMMENT,
      commentId,
      response
    }),
    label: commentId
  }
})
