import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
    <Toaster position="bottom-left" />
    <App />

    </Provider>
  
  </>
);
