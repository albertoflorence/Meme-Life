import React, { Component, Fragment } from 'react'
import Toolbar from '../components/Header/Toolbar'
import AuthContainer from './AuthContainer'
import { getIsAuthenticated } from '../store/reducers'
import { connect } from 'react-redux'
import Drawer from '../components/Header/Drawer'
import withWidth from 'material-ui/utils/withWidth'

class HeaderContainer extends Component {
  state = {
    itemsCenter: [
      { name: 'IMAGES', link: '/posts/category/images' },
      { name: 'VIDEOS', link: '/posts/category/videos' },
      { name: 'GIFS', link: '/posts/category/gifs' }
    ],
    openDrawer: false
  }

  get itemsRight() {
    const { isAuthenticated } = this.props
    return isAuthenticated
      ? [
          { name: 'create', link: '/post/create' },
          { name: 'logout', link: '/logout' }
        ]
      : [{ name: 'login', component: <AuthContainer /> }]
  }

  toggleDrawerHandler = () => {
    this.setState(prevState => ({ openDrawer: !prevState.openDrawer }))
  }

  closeDrawerHandler = () => {
    this.setState({ openDrawer: false })
  }

  render() {
    const { width } = this.props
    return (
      <Fragment>
        <Drawer
          onClose={this.closeDrawerHandler}
          open={this.state.openDrawer}
          items={this.state.itemsCenter}
        />
        <Toolbar
          onMenuClick={this.toggleDrawerHandler}
          itemsCenter={width !== 'xs' ? this.state.itemsCenter : []}
          itemsRight={this.itemsRight}
          showMenuItem={width === 'xs'}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state)
})

export default connect(mapStateToProps)(withWidth()(HeaderContainer))
