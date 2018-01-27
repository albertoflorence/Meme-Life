import React, { Component, Fragment } from 'react'
import Post from '../components/Post/index'
import { CircularProgress } from 'material-ui/Progress'

import Comments from '../components/Comments/index'
import { connect } from 'react-redux'
import { getPost } from '../store/reducers'
import { fetchPostById, addComment } from '../store/actions'

class PostContainer extends Component {
  componentDidMount() {
    this.props.fetchPostById(this.props.postId)
  }

  submitCommentHandler = body => {
    this.props.addComment(
      { body, postId: this.props.postId },
      this.props.userInfo
    )
  }

  render() {
    const { post } = this.props
    const render = post ? (
      <Fragment>
        <Post post={post} />
        {post.comments && (
          <Comments
            comments={post.comments}
            onSubmitComment={this.submitCommentHandler}
          />
        )}
      </Fragment>
    ) : (
      <CircularProgress />
    )

    return render
  }
}

const mapStateToProps = (state, { match }) => {
  const postId = match.params.id
  return {
    post: getPost(state, postId),
    postId,
    userInfo: state.auth.user
  }
}

export default connect(mapStateToProps, { fetchPostById, addComment })(
  PostContainer
)
