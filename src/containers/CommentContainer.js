import React, { Component, Fragment } from 'react'
import { CircularProgress } from 'material-ui/Progress'

import CommentTextInput from '../components/Comments/CommentTextInput'
import Comment from '../components/Comments/Comment'
import { connect } from 'react-redux'
import { getComments, getIsFetching } from '../store/reducers'
import {
  fetchReplies,
  addComment,
  addReplyComment,
  fetchComments
} from '../store/actions'

class PostContainer extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.postId)
  }

  submitCommentHandler = body => {
    this.props.addComment(
      { body, postId: this.props.postId },
      this.props.userInfo
    )
  }

  replyCommentHandler = commentId => body => {
    this.props.addReplyComment({ body, commentId }, this.props.userInfo)
  }

  render() {
    const { comments, isReplyFetching } = this.props
    const render = comments ? (
      <Fragment>
        <CommentTextInput onSubmitComment={this.submitCommentHandler} />
        {comments.map(comment => (
          <Comment
            onReply={this.replyCommentHandler(comment._id)}
            key={comment._id}
            fetchReplies={this.props.fetchReplies}
            comment={comment}
            isFetching={isReplyFetching(comment._id)}
          />
        ))}
      </Fragment>
    ) : (
      <CircularProgress />
    )

    return render
  }
}

const mapStateToProps = (state, postId) => {
  return {
    comments: getComments(state, postId),
    userInfo: state.auth.user,
    isReplyFetching: commentId => getIsFetching(state, commentId)
  }
}

export default connect(mapStateToProps, {
  fetchReplies,
  addComment,
  addReplyComment,
  fetchComments,
  getIsFetching
})(PostContainer)
