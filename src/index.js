import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Auth0Provider } from "@auth0/auth0-react";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    type: "dark",
  }
});

ReactDOM.render(
  // <Auth0Provider
  //   domain="dev-carsharing.eu.auth0.com"
  //   clientId="221ERbFIwmGXCj4lz3hZQkMeaYCZ3LiJ"
  //   audience="http://localhost:7000/User/login"
  //   scope="read:current_user update:current_user_metadata"
  // >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>,
  // </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
