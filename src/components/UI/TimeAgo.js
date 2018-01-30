import React from 'react'

const TimeAgo = ({ date }) => (
  <span style={{ color: 'grey', fontSize: '12px' }}>
    {formatTime(new Date() - new Date(date))}
  </span>
)

export default TimeAgo

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

const formatTime = (time, i = 0) => {
  if (isNaN(i)) i = names.indexOf(i)

  const cur = arr[i]
  if (time >= cur && cur !== undefined) {
    return formatTime(time / cur, i + 1)
  }
  const rounded = Math.floor(time)
  const plural = rounded > 1 ? 's' : ''
  return rounded + ' ' + names[i] + plural + ' ago'
}
