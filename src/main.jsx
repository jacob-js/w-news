import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/public-sans';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import router from './router';

axios.defaults.params = {apiKey: "dc6c52bcb7734ed59ed9898541938a6d", sources: "techcrunch"};
axios.defaults.baseURL = "https://news-proxy.netlify.app/api";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
