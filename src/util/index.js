export const map = (iterator, callback) => {
  const arr = []
  for (let key in iterator) {
    arr.push(callback(iterator[key], key))
  }
  return arr
}

export const some = (iterator, callback) => {
  const test = false
  for (let key in iterator) {
    if (callback(iterator[key], key)) return true
  }
  return test
}

export const reduce = (iterator, callback, initial) => {
  let accumulator = initial
  for (let key in iterator) {
    accumulator = callback(accumulator, iterator[key], key)
  }
  return accumulator
}

export const mapObject = (iterator, callback) => {
  const obj = {}
  for (let key in iterator) {
    obj[key] = callback(iterator[key], key)
  }
  return obj
}

export const extractValueFromInput = object =>
  mapObject(object, ({ value }) => value)

export const toFormData = object =>
  reduce(
    object,
    (formData, cur, key) => {
      formData.append(key, cur)
      return formData
    },
    new FormData()
  )

export const transformDate = posts =>
  posts.map(post => ({
    ...post,
    created_at: formatTime(new Date() - new Date(post.created_at))
  }))

const formatTime = (time, i = 0) => {
  const arr = [1000, 60, 60, 24, 7, 4, 12]
  const names = [
    'millisecond',
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'mounth',
    'year'
  ]
  if (isNaN(i)) i = names.indexOf(i)
  const cur = arr[i]
  if (time >= cur && cur !== undefined) {
    return formatTime(time / cur, i + 1)
  }
  const rounded = Math.floor(time)
  const plural = rounded > 1 ? 's' : ''
  return rounded + ' ' + names[i] + plural + ' ago'
}
