// App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, } from "react-router-dom";
import './App.css';
import Login from "./routes/Login.js";
import Mainpage from "./routes/Mainpage.js";
import Account from "./routes/Account.js";
import Mypage from "./routes/Mypage.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
            <div>
              <div className="App-header">
                <p className="Title">
                  Mos-<span className="highlighted-text">AI</span>c
                </p>
                <p className="Text">
                  ‘Mos-AIc’는 얼굴은 인식하여 자동으로 모자이크 처리 해주는 사이트입니다.
                  <br/>원하시는 얼굴 사진을 업로드하시고 'invert' 버튼 클릭하시면 됩니다.
                  <br/>
                  만약 얼굴이 인식되지 않을 경우, 작동하지 않으니 얼굴이 명확히 드러나는 사진을 첨부해주세요.
                  <br/>로그인 후 사용하실 경우, 저장된 사진 데이터를 볼 수 있습니다.
                  <br/>
                  <br/>
                  <br/>만든이 : 김휘선(AI) 민재준(Back-end) 정지윤(Front-end)
                </p>
                <Link to="/login" style={{ textDecoration: "none" }} className="Button">
                  start
                </Link>
              </div>
            </div>
          }
        />
        <Route path="/main" element={<Mainpage/>} />
        <Route path="/login" element = {<Login/>}/>
        <Route path="/mypage" element = {<Mypage/>}/>
        <Route path ="/account" element = {<Account/>}/>
      </Routes>
    </div>
  );
}

export default App;
