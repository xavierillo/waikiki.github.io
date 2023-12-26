import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fortawesome/fontawesome-free/css/all.css';
import './fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
