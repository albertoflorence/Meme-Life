import api from './api'

export const replyComment = data => api.post('comments/reply', data)

export const createComment = data => api.post('posts/comments', data)

export const getComments = postId => api.get(`comments?postId=${postId}`)

export const getCommentById = id => api.get(`comments/${id}`)
