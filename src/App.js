import React, { Component, Fragment } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { blue, red } from 'material-ui/colors'
import PostContainer from './containers/PostContainer'
import Layout from './components/Layout'
import HeaderContainer from './containers/HeaderContainer'
import PostCreate from './components/PostCreate'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: '#24292e'
    },
    secondary: {
      light: red[300],
      main: red[500],
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
                <Route path="/" exact component={PostContainer} />
                <Route path="/post/create" exact component={PostCreate} />
              </Switch>
            </Layout>
          </Fragment>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
