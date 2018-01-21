import React, { Component, Fragment } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { blue, red } from 'material-ui/colors'
import PostContainer from './containers/PostContainer'
import Layout from './components/Layout'
import Header from './components/Header'
import Auth from './components/Auth'
import PostCreate from './components/PostCreate'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300],
      main: blue[500],
      dark: blue[700]
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
            <Header />
            <Layout>
              <Switch>
                <Route path="/" exact component={PostContainer} />
                <Route path="/login" exact component={Auth} />
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
