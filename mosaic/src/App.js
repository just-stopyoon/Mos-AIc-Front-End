// App.js
import React from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import './App.css';
import Login from './routes/Login.js';

function App() {

  return (
      <div className="App">

        <Routes>
          <Route path = "/" element = {
          <div>
            <div className="App-header">
              <p className="Title">
                Mos-<span className="highlighted-text">AI</span>c
              </p>
              <p className="Text">
                ‘Mos-AIc’는 얼굴은 인식하여 자동으로 모자이크 처리 해주는 사이트입니다.
              </p>
            <Link to = "/login" style = {{ textDecoration : "none"}} className="Button">
              start
            </Link>
            </div>
          </div>} />

          <Route path = "/login" element = {<Login/>} />

          
        </Routes>
        
      </div>
  );
}

export default App;
