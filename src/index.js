import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App';
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#blue',
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
