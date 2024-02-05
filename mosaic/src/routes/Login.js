// Login.js
import React from "react";
import { Link, Route, Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';
import './Login.css';

function Login() {
  return (
    <div>
        <Navigation/>
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
        <p className = "login-title">
          로그인 하기
        </p>
        <p className = "login-text">
          'mos-AIc'가 처음이라면?
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
