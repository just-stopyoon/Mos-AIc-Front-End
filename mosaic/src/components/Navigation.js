import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './Navigation.css';

const Navigation = () => {
    const navigation = useNavigate();
    const onClickInvert = () => alert("모델을 불러옵니다")
    return(
        <div>
            <Navbar className="Navbar">
                <Container>
                    <Navbar.Brand href="/">
                        <p className="NavTitle">
                            Mos-<span className="N-highlighted-text">AI</span>c
                        </p>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href = "/mypage" style = {{ textDecoration : "none" }} className="N-invertButton">
                            my page
                        </Nav.Link>
                        <Nav.Link href = "/login" style = {{ textEdcoration : "none" }} className = "N-myPageButton">
                            logout
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation;