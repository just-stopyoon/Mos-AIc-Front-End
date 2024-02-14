// Login.js
import React from "react";
import { Link, Route, Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';
import './Login.css';

function Login() {
  return (
    <div>
        <Background/>
    </div>
  )
};

const Background = () => (
  <div className = "background">
    <LoginBox/>
  </div>
)

const LoginBox = () => {
  return (
    <div>
      <div className = "rectangle">
        <p className="Title-text">
          Mos-<span className="highlighted-text">AI</span>c
          {/* <span className = "login-title">로그인 하기</span> */}
        </p>
        <p className = "login-text">
          사이트 이용이 처음이라면?
        <Link to="/account" style={{ textDecoration: "none" }} className="account-Button">
          회원가입
        </Link>
        </p>
        <input className = "email-box" type = 'email'/>
        <input className = "password-box" type = 'password'/>
        <br/>
        <Link to="/main" style={{ textDecoration: "none" }} className="login-Button">
          로그인
        </Link>
      </div>
    </div>
  );
}


export default Login;
