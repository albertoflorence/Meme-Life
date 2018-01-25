import React, { Component } from 'react'
import Post from '../components/Post/index'
import { CircularProgress } from 'material-ui/Progress'

import { getPosts } from '../services/posts'

class PostContainer extends Component {
  state = {
    posts: null
  }

  componentDidMount() {
    getPosts(this.props.match.params.category).then(posts =>
      this.setState({ posts })
    )
  }

  componentDidUpdate(prevProps) {
    const { category } = this.props.match.params
    if (prevProps.match.params.category !== category) {
      getPosts(category).then(posts => this.setState({ posts }))
    }
  }

  render() {
    const { posts } = this.state
    const render = posts ? (
      posts.map(post => <Post key={post._id} post={post} />)
    ) : (
      <CircularProgress />
    )

    return render
  }
}

export default PostContainer
