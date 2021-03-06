import axios from 'axios'

const api = axios.create({
  baseURL: 'https://memelifeserver.herokuapp.com/'
})

api.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response.status === 401) {
      window.location.href = '/login/'
    }
    return Promise.reject({
      ...error.response.data,
      status: error.response.status
    })
  }
)

export default api
