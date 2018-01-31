import React, { Component, Fragment } from 'react'
import Post from '../components/Post/index'
import { CircularProgress } from 'material-ui/Progress'
import { connect } from 'react-redux'
import { fetchPosts } from '../store/actions'
import { getPosts } from '../store/reducers'
import { getIsFetching } from '../store/reducers'
import PaginationContainer from './PaginationContainer'

class PostsContainer extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.filter !== prevProps.filter ||
      this.props.page !== prevProps.page
    ) {
      this.fetchData()
    }
  }

  fetchData() {
    const { fetchPosts, filter, page } = this.props
    fetchPosts(filter, page)
  }

  render() {
    const { posts, isFetching, page } = this.props
    const render =
      posts.length > 0
        ? posts.map(post => <Post key={post._id} post={post} />)
        : isFetching && <CircularProgress />

    return (
      <Fragment>
        {render}
        <div style={{ textAlign: 'center' }}>
          <PaginationContainer currentPage={page} />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state, { match, location }) => {
  const filter = match.params.category
  const stringMatch = location.search.match(/page=\d+/)
  let page = 1
  if (stringMatch) page = parseInt(stringMatch[0].slice(5), 10) || 1
  return {
    posts: getPosts(state, filter),
    isFetching: getIsFetching(state, 'post'),
    filter,
    page
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsContainer)
