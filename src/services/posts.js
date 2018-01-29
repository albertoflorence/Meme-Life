import api from './api'

export const getPosts = category => api.get('posts', { params: { category } })

export const getPostById = id => api.get(`posts/${id}`)

export const createPost = data => api.post('posts', data)

export const createComment = data => api.post('posts/comments', data)

export const likePost = data => api.post('posts/like', data)
