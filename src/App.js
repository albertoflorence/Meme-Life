import React, { Component, Fragment } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { blue, red } from 'material-ui/colors'
import PostsContainer from './containers/PostsContainer'
import Layout from './components/Layout'
import HeaderContainer from './containers/HeaderContainer'
import PostContainer from './containers/PostContainer'
import PostCreateContainer from './containers/PostCreateContainer'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: '#192f62',
      dark: '#24292e'
    },
    secondary: {
      light: red[300],
      main: '#C30000',
      dark: red[700]
    }
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Fragment>
            <HeaderContainer />
            <Layout>
              <Switch>
                <Route path="/" exact component={PostsContainer} />
                <Route
                  path="/post/create"
                  exact
                  component={PostCreateContainer}
                />
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
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
