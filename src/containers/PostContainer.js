import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { CircularProgress } from 'material-ui/Progress'

import { getPosts } from '../services/api'

class PostContainer extends Component {
  state = {
    posts: null
  }

  componentDidMount() {
    getPosts().then(posts => this.setState({ posts }))
  }

  render() {
    const { posts } = this.state
    const render = posts ? (
      posts.map(post => <Post post={post} />)
    ) : (
      <CircularProgress />
    )
    return render
  }
}

export default PostContainer
