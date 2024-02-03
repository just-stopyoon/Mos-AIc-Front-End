import React from "react";
import { Link, Switch, Route, Router } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import uploadImage from '../image/uploadImage.png';
import Mainpage from './Mainpage.js';
import Login from './Login.js';

const Mainpage = () => {
    return (
    <div>
        <Navbar className="Navbar">
        <Container>
            <Navbar.Brand href="#home">
                <p className="NavTitle">
                    Mos-<span className="highlighted-text">AI</span>c
                </p>
            </Navbar.Brand>
            <Nav>
                <Link to = "/invert" style = {{ textDecoration : "none"}} className="invertButton" >
                    Invert
                </Link>
                <Link to = "/login" style = {{ textDecoration : "none" }} className="loginButton">
                    Login
                </Link>
            </Nav>
        </Container>
        </Navbar>
        <Switch>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/" element = {<Mainpage/>}/>
        </Switch>
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
