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

export const queryParser = obj => {
  if (!obj) return ''
  let string = '?'
  let querys = []
  for (let key in obj) {
    if (!obj[key]) continue
    querys.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
  }
  string += querys.join('&')
  return string
}
