import React, { Component } from 'react'
import Header from '../components/Header/Toolbar'
import AuthContainer from './AuthContainer'
class HeaderContainer extends Component {
  state = {
    isAuthenticated: true,
    itemsCenter: [
      { name: 'IMAGES', link: '/posts/category/images' },
      { name: 'VIDEOS', link: '/posts/category/videos' },
      { name: 'GIFS', link: '/posts/category/gifs' }
    ]
  }

  get itemsRight() {
    const { isAuthenticated } = this.state
    return isAuthenticated
      ? [
          { name: 'create', link: '/post/create' },
          { name: 'logout', link: '/logout' }
        ]
      : [{ name: 'login', component: <AuthContainer /> }]
  }

  render() {
    return (
      <Header
        itemsCenter={this.state.itemsCenter}
        itemsRight={this.itemsRight}
      />
    )
  }
}

export default HeaderContainer
