import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {cartStore} from './Components/Redux/cartStore'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={cartStore}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  
);

