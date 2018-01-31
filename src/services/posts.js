import api from './api'

export const getPosts = (category, page) =>
  api.get('posts', { params: { category, page } })

export const getPostById = id => api.get(`posts/${id}`)

export const createPost = data => api.post('posts', data)

export const likePost = data => api.post('posts/like', data)
