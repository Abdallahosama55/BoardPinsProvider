import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './i18n'; // Import i18n config
//Import Mixpanel SDK
import mixpanel from "mixpanel-browser";
 
// Near entry of your product, init Mixpanel
mixpanel.init("4c15fb379edc81a2eb89b330bfcf4dfb", {
  debug: true,
  track_pageview: true,
  persistence: "localStorage",
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
    <Toaster position="bottom-left" />
    <App />

    </Provider>

    
  
  </>
);
