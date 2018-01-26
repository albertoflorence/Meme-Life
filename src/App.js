import React, { Component, Fragment } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import PostsContainer from './containers/PostsContainer'
import Layout from './components/Layout'
import HeaderContainer from './containers/HeaderContainer'
import PostContainer from './containers/PostContainer'
import PostCreateContainer from './containers/PostCreateContainer'
import Logout from './containers/Logout'

class App extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer />
        <Layout>
          <Switch>
            <Route path="/" exact component={PostsContainer} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/post/create" exact component={PostCreateContainer} />
            <Route
              path="/posts/category/:category"
              exact
              component={PostsContainer}
            />
            <Route path="/posts/:id" exact component={PostContainer} />
          </Switch>
        </Layout>
        <div style={{ height: '300px', width: '100%' }}> </div>
      </Fragment>
    )
  }
}

export default App
