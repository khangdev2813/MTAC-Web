import React from 'react'
import { CssBaseline } from '@mui/material'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import theme from '../theme.js'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App sx={{ height: '100vh' }} />
    </CssVarsProvider>
  </React.StrictMode>
)
