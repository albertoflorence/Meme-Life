import React from 'react'
import { Provider } from 'react-redux'
import App from '../App'
import { Route, BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#192f62',
      dark: '#24292e'
    },
    secondary: {
      main: '#C30000'
    }
  }
})

const Root = ({ store }) => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
)

export default Root
