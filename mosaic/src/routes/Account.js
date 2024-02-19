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
    <div className = "A-background">
    <MakeAccount/>
</div>
)

const MakeAccount = () => {
    return (
        <div>
        <div className = "A-rectangle">
            <p className="A-Title-text">
                Mos-<span className="A-highlighted-text">AI</span>c
            </p>
            <p className = "A-account-title">회원가입</p>
            <input className = "A-email-box" type = 'email' placeholder = 'name@example.com'/>
            <input className = "A-password-box" type = 'password' placeholder = 'password'/>
            <input className = "A-password-box" type = 'password' placeholder = 'password again'/>
            <br/>
            <label className = "A-checkbox-text">
                <input className = "A-checkbox" type = "checkbox" value=""/>
                이메일 수집 및 개인정보 활용에 동의합니다.
            </label>
            <Link to="/main" style={{ textDecoration: "none" }} className="A-account-Button">
            가입하기
            </Link>
        </div>
        </div>
    );
}

export default Account;