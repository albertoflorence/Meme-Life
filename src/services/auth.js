import api from './api'

export const signIn = data => api.post('users/signin', data)

export const signUp = data => api.post('users/signup', data)

export const signInWithToken = token =>
  api.post('users/signin/token', { token })
