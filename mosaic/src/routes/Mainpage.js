import React from "react";
import {useState} from "react";
import {VscClose} from 'react-icons/vsc';

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
    <div className = "M-background">
        <UploadBox/>
    </div>
);

const Logo = () => (
    <svg className="icon" x="0px" y="0px" viewBox="0 0 24 24">
    <path fill="transparent" d="M0,0h24v24H0V0z" />
    <image xlinkHref={uploadImage} width = "24px" height = "24px"/>
    </svg>
);

const [isActive, setActive] = useState(false);
const handleDragStart = () => setActive(true);
const handleDragEnd = () => setActive(false);

const FileInfo = ({ uploadedInfo }) => (
    <ul className="preview_info">
        {Object.entries(uploadedInfo).map(([key, value]) => (
            <li key={key}>
                <span className="info_key">{key}</span>
                <span className="info_value">{value}</span>
            </li>
        ))}
    </ul>
);

const UploadBox = () => {
    const [uploadedInfo, setUploadedInfo] = useState
    return (
        <label className="upload-box">
            <input type="file" className="drag-file" id = "fileInput"/>
            <Logo/>
            <p className="upload-text">사진 파일을 업로드하거나 클릭</p>
            <p className="sub-text">또는 여기에 파일 끌어다놓기</p>
            <p className = "sub-sub-text">*.jpg 또는 .png 파일만 첨부 가능</p>
        </label>
    );
}

export default Mainpage;
