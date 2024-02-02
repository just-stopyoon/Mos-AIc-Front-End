import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 현재 디렉토리(./)에서 App.js를 가져오도록 수정
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
