import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/public-sans';

import NavBar from './partials/NavBar'
import Home from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Home />
  </React.StrictMode>,
)
