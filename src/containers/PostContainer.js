import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { CircularProgress } from 'material-ui/Progress'

import { getPostById } from '../services/posts'
import Comments from '../components/Comments/index'

class PostContainer extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    getPostById(this.props.match.params.id).then(post =>
      this.setState({ post })
    )
  }

  componentDidUpdate(prevProps) {}

  render() {
    const { post } = this.state
    const render = post ? (
      <Fragment>
        <Post post={post} />
        <Comments comments={post.comments} />
      </Fragment>
    ) : (
      <CircularProgress />
    )

    return render
  }
}

export default PostContainer
