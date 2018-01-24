import React, { Component } from 'react'
import { CircularProgress } from 'material-ui/Progress'

import { createPost } from '../services/posts'
import PostCreate from '../components/PostCreate'
import { extractValueFromInput, toFormData } from '../util/index'

class PostContainer extends Component {
  handleFormSubmit = (event, data) => {
    const postInfo = extractValueFromInput(data)
    const postFormData = toFormData(postInfo)
    createPost(postFormData)
      .then(console.log)
      .catch(console.log)
  }

  render() {
    return <PostCreate onSubmit={this.handleFormSubmit} />
  }
}

export default PostContainer
