import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc000', // Orange Yellow
    },
    secondary: {
      main: '#000000', // Black
    },
    background: {
      default: '#f5f5f5', // Light grey background
    },
    text: {
      primary: '#ffffff', // Black text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: 14,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
