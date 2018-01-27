import React, { Component } from 'react'
import Post from '../components/Post/index'
import { CircularProgress } from 'material-ui/Progress'
import { connect } from 'react-redux'
import { fetchPosts } from '../store/actions'
import { getPosts } from '../store/reducers'

class PostsContainer extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { fetchPosts, filter } = this.props
    fetchPosts(filter)
  }

  render() {
    const { posts } = this.props
    const render = posts ? (
      posts.map(post => <Post key={post._id} post={post} />)
    ) : (
      <CircularProgress />
    )

    return render
  }
}

const mapStateToProps = (state, { match }) => {
  const filter = match.params.category
  return {
    posts: getPosts(state, filter),
    filter
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsContainer)
