import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  //! Here we wrap our app with our own theme we created with mui
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

