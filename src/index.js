import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'theme-ui'
import theme from './theme.js';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);



