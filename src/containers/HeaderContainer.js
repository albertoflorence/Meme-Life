import React, { Component } from 'react'
import Header from '../components/Header/index'
import AuthContainer from './AuthContainer'
class HeaderContainer extends Component {
  state = {
    user: {
      name: 'Alberto Florence',
      email: 'alberto.sabatier@gmail.com',
      role: {
        description: 'admin',
        level: 0
      }
    },
    itemsCenter: [
      { name: 'IMAGES', link: '/posts/category/images' },
      { name: 'videos', link: '/posts/category/videos' },
      { name: 'gifs', link: '/posts/category/gifs' }
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
