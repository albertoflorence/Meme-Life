import React from 'react'

const img = {
  width: '100%',
  maxHeight: '100%'
}

const videoWrapper = {
  position: 'relative',
  paddingBottom: '56.25%',
  paddingTop: '25px',
  height: '0',
  width: '100%'
}
const iframe = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 0
}

const Content = ({ category, url }) => {
  if (!url) return null
  if (url.slice(0, 4) !== 'blob' && url.slice(0, 4) !== 'http') return null
  if (category === 'gifs' || category === 'images') {
    return <img style={img} src={url} alt="test" />
  } else if (category === 'videos') {
    return (
      <div style={videoWrapper}>
        <iframe
          title={'Video Content'}
          style={iframe}
          src={url.replace('watch?v=', 'embed/')}
        />
      </div>
    )
  }
  return null
}

export default Content
