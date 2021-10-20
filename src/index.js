import React from 'react'
import ReactDOM from 'react-dom'
require('dotenv').config()
import 'leaflet/dist/leaflet.css'
import './index.css'
import App from './App'
import { AdminProvider } from './context/Context'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <AdminProvider>
      <App />
    </AdminProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
