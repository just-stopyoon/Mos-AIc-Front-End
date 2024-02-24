import React from "react";
import './Mypage.css';
import { useNavigate } from "react-router-dom";
import { Link, Route, Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Mypage() {
    return (
        <div>
            <Navigation />
            <Background />
        </div>
    )
};

const Background = () => (
    <div className="M-background">
        <Profile />
    </div>
);

const Profile = () => (
    <div className = "MY-text">
        해당 기능은 추후 개발될 예정입니다.
    </div>
)

export default Mypage;