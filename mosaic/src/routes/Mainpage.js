import React from "react";
import { Link, Route, Router } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './Mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uploadImage from '../image/uploadImage.png';
import Navigation from '../components/Navigation';

const Mainpage = () => {
    return (
    <div>
        <Navigation/>
        <Background />
    </div>
    );
};

const Background = () => (
    <div className = "background">
        <UploadBox/>
    </div>
);

const Logo = () => (
    <svg className="icon" x="0px" y="0px" viewBox="0 0 24 24">
    <path fill="transparent" d="M0,0h24v24H0V0z" />
    <image xlinkHref={uploadImage} width = "24px" height = "24px"/>
    </svg>
);

const UploadBox = () => {
    return (
        <label className="upload-box">
            <input type="file" className="drag-file" id = "fileInput"/>
            <Logo/>
            <p className="upload-text">업로드하려나 클릭하세요</p>
            <p className="sub-text">또는 여기에 파일 끌어다놓기</p>
        </label>
    );
}

export default Mainpage;
