import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/public-sans';

import NavBar from './partials/NavBar'
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';

axios.defaults.params.apiKey = "dc6c52bcb7734ed59ed9898541938a6d";
axios.defaults.baseURL = "https://newsapi.org/v2";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar />
      <Home />
    </Provider>
  </React.StrictMode>,
)
