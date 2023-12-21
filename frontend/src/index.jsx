import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './router/Router'
import App from './App';
import ModalProvider from './provider/ModalProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ModalProvider />
    <App/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
