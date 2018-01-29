import {
  getPosts,
  getPostById,
  createPost,
  createComment,
  likePost as apiLikePost
} from '../../../services/posts'

import {
  API,
  FETCH_POSTS,
  FETCH_POST,
  ADD_POST_COMMENT,
  LIKE_POST
} from '../../constants'
import { postSchemaList, postSchema } from './schema'
import { normalize } from 'normalizr'

export const fetchPosts = filter => ({
  type: API,
  payload: {
    api: getPosts(filter),
    success: response => ({
      type: FETCH_POSTS,
      ...normalize(response, postSchemaList),
      filter: filter || 'all'
    }),
    label: 'post'
  }
})

export const fetchPostById = id => ({
  type: API,
  payload: {
    api: getPostById(id),
    success: fetchPostSuccess,
    label: 'post'
  }
})

const fetchPostSuccess = response => ({
  type: FETCH_POST,
  ...normalize(response, postSchema),
  filter: response.category
})

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

export const likePost = ({ postId }) => ({
  type: API,
  payload: {
    api: apiLikePost({ postId }),
    success: response => ({
      type: LIKE_POST,
      response,
      postId
    })
  }
})
