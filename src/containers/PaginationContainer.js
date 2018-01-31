import React, { Component } from 'react'
import { connect } from 'react-redux'
import withRouter from 'react-router-dom/withRouter'
import { getPages } from '../store/reducers'
import Pagination from '../components/UI/Pagination'
class PaginationContainer extends Component {
  handlerPageChange = page => {
    this.props.history.push({
      pathname: '',
      search: '?page=' + page
    })
  }
  render() {
    const { pages, currentPage } = this.props
    if (!pages) return null
    return (
      <Pagination
        pages={pages}
        current={currentPage}
        maxRange={8}
        onChange={this.handlerPageChange}
      />
    )
  }
}
const mapStateToProps = (state, { location }) => {
  return {
    pages: getPages(state)
  }
}

export default withRouter(connect(mapStateToProps)(PaginationContainer))
