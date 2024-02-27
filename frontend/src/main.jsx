import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MaxWidthWrapper from './components/MaxWidthWrapper'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MaxWidthWrapper>

    <App />
  </MaxWidthWrapper>
  </React.StrictMode>,
)
