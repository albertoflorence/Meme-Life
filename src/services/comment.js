import api from './api'

export const replayComment = data => api.post('comments/replay', data)
