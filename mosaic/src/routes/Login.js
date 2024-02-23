import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const Login = () => {
  return (
    <div>
      <Background />
    </div>
  );
};

const Background = () => (
  <div className="L-background">
    <LoginBox />
  </div>
);

const LoginBox = () => {
  const navigate = useNavigate();
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(true);
  const loginURL = "http://localhost:5000/login";

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "emailID") setEmailID(value);
    else if (name === "password") setPassword(value);
    setIsCorrect(true);
  };

  const loginto = (e) => {
    e.preventDefault();
    if (!emailID || !password) {
      setIsCorrect(false);
      return;
    } else {
      const formData = {
        id: emailID,
        pw: password,
      };
  
      axios
        .post(loginURL, formData)
        .then((res) => {
          if (res.data === true) {
            navigate("/main");
          } else {
            setIsCorrect(false);
          }
        })
        .catch((err) => {
          console.error("로그인 오류:", err);
          setIsCorrect(false);
        });
    }
  };
  

  return (
    <div className="L-rectangle">
      <p className="L-Title-text">
        Mos-<span className="L-highlighted-text">AI</span>c
      </p>
      <p className="L-login-text">
        사이트 이용이 처음이라면?
        <Link to="/account" style={{ textDecoration: "none" }} className="L-to-account-Button">
          회원가입
        </Link>
      </p>
      <form onSubmit={loginto}>
        <input
          name="emailID"
          type="email"
          className="L-email-box"
          placeholder="name@example.com"
          required
          value={emailID}
          onChange={onChange}
        />{" "}
        <input
          name="password"
          type="password"
          className="L-password-box"
          placeholder="password"
          required
          value={password}
          onChange={onChange}
        />
        <br />
        <button className="L-login-Button">
          로그인
        </button>
        {!isCorrect && emailID && password && (
          <p className="L-noneCorrect">ID 또는 비밀번호가 맞지 않습니다. 다시 확인해주세요.</p>
        )}
      </form>
    </div>
  );
};

export default Login;