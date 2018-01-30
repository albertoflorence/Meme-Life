import React, { Component, Fragment } from 'react'
import Post from '../components/Post/index'
import { CircularProgress } from 'material-ui/Progress'

import { connect } from 'react-redux'
import { getPost } from '../store/reducers'
import { fetchPostById } from '../store/actions'
import CommentContainer from './CommentContainer'

class PostContainer extends Component {
  componentDidMount() {
    this.props.fetchPostById(this.props.postId)
  }

  render() {
    const { post } = this.props
    if (!post) return <CircularProgress />
    return (
      <Fragment>
        <Post post={post} />
        <CommentContainer postId={post._id} />
      </Fragment>
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const postId = match.params.id
  return {
    post: getPost(state, postId),
    postId
  }
}

export default connect(mapStateToProps, {
  fetchPostById
})(PostContainer)
