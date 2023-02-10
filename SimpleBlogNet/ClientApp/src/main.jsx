import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'

axios.defaults.baseURL = import.meta.env.BASE_URL + "api";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
    </BrowserRouter>,
)
