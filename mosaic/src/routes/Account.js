import React from "react";
import './Account.css';
import { Link, Route, Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';

function Account() {
    return (
        <div>
            <Background/>
        </div>
    )
};

const Background = () => (
    <div className = "background">
    <MakeAccount/>
</div>
)

const MakeAccount = () => {
    return (
        <div>
        <p className="Title-text">
            Mos-<span className="highlighted-text">AI</span>c
        </p>
        <div className = "rectangle">
            <p className = "login-title">회원가입</p>
            <p className = "text-title">이메일</p>
            <input className = "email-box" type = 'email'/>
            <p className = "text-title">비밀번호</p>
            <input className = "password-box" type = 'password'/>
            <p className = "text-title">비밀번호 확인</p>
            <input className = "password-box" type = 'password'/>
            <br/>
            <Link to="/main" style={{ textDecoration: "none" }} className="login-Button">
            가입하기
            </Link>
        </div>
        </div>
    );
}

export default Account;