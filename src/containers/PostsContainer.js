import React, { Component, Fragment } from 'react'
import Post from '../components/Post/index'
import { CircularProgress } from 'material-ui/Progress'
import Pagination from '../components/UI/Pagination'
import { connect } from 'react-redux'
import { fetchPosts } from '../store/actions'
import { getIsFetching, getPages, getPosts } from '../store/reducers'

class PostsContainer extends Component {
  state = {
    currentPage: 1
  }

  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state
    if (prevState.currentPage !== currentPage) {
      this.fetchData()
      window.scrollTo(0, 0)
    } else if (prevProps.filter !== this.props.filter) {
      if (currentPage !== 1) {
        return this.setState({ currentPage: 1 })
      }
      this.fetchData()
    }
  }

  handlerPageChange = page => {
    this.setState({
      currentPage: page
    })
  }

  fetchData() {
    const { fetchPosts, filter } = this.props
    fetchPosts(filter, this.state.currentPage)
  }

  render() {
    const { posts, isFetching, pages } = this.props
    const { currentPage } = this.state

    if (isFetching && posts.length < 1) return <CircularProgress />

    return (
      <Fragment>
        {posts.map(post => <Post key={post._id} post={post} />)}
        <div style={{ textAlign: 'center' }}>
          <Pagination
            pages={pages}
            current={currentPage}
            maxRange={8}
            onChange={this.handlerPageChange}
          />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state, { match, location }) => {
  const filter = match.params.category
  return {
    posts: getPosts(state, filter),
    isFetching: getIsFetching(state, 'post'),
    pages: getPages(state),
    filter
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsContainer)
