import React, { Component } from 'react'
import { CircularProgress } from 'material-ui/Progress'
import { Redirect } from 'react-router-dom'

import { createPost } from '../services/posts'
import PostCreate from '../components/PostCreate'
import { extractValueFromInput, toFormData } from '../util/index'

class PostContainer extends Component {
  state = {
    redirect: null,
    isLoading: false
  }
  handleFormSubmit = async (event, data) => {
    const postInfo = extractValueFromInput(data)
    const postFormData = toFormData(postInfo)
    this.setState({ isLoading: true })
    await createPost(postFormData)
      .then(post => this.setState({ redirect: post._id }))
      .catch(() => this.setState({ isLoading: false }))
  }

  render() {
    const { isLoading, redirect } = this.state
    if (redirect) {
      return <Redirect to={`/posts/${redirect}`} />
    }
    if (isLoading) {
      return <CircularProgress />
    }
    return <PostCreate onSubmit={this.handleFormSubmit} isLoading={isLoading} />
  }
}

export default PostContainer
