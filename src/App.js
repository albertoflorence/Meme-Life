import React, { Component } from 'react'
import './App.css'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { blue, red } from 'material-ui/colors'
import PostContainer from './containers/PostContainer'
import Layout from './components/Layout'
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
        <div>
          <div style={{ height: '80px' }} />
          <Layout>
            <PostContainer />
          </Layout>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
