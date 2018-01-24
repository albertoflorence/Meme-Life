export const getPosts = category => Promise.resolve()

export const getPostById = id => Promise.resolve()

export const creatPost = data => Promise.resolve()

const baseUrl = 'http://localhost:8000/'
export const get = url => fetch(baseUrl + url)

export const post = (url, body) =>
  fetch(baseUrl + url, {
    method: 'post',
    body: body
  })

export const postJson = (url, body) =>
  fetch(baseUrl + url, {
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
