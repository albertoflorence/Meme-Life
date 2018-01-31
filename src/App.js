import React, { Component, Fragment } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import PostsContainer from './containers/PostsContainer'
import Layout from './components/Layout'
import HeaderContainer from './containers/HeaderContainer'
import PostDetailsContainer from './containers/PostDetailsContainer'
import PostCreateContainer from './containers/PostCreateContainer'
import Logout from './containers/Logout'
import { connect } from 'react-redux'
import { signInWithToken } from './store/actions'
import { getIsFetching } from './store/reducers/isFetching'
import AuthContainer from './containers/AuthContainer'

class App extends Component {
  componentWillMount() {
    const token = localStorage.getItem('token')
    if (token && token !== 'null') {
      this.props.signInWithToken(token)
    }
  }

  render() {
    return (
      <Fragment>
        <HeaderContainer showUserItems={!this.props.isFetching} />
        <Route path="/login" exact component={AuthContainer} />
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
            <Route path="/posts/:id" exact component={PostDetailsContainer} />
          </Switch>
        </Layout>
        <div style={{ height: '300px', width: '100%' }}> </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: getIsFetching('autoSignin')
})

export default connect(mapStateToProps, { signInWithToken })(App)
