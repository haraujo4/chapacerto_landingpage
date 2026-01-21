import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Shim para compatibilidade com bibliotecas que esperam React global
if (typeof window !== 'undefined') {
  window.React = React;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
