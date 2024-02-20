import React, { useState } from "react";

import './Mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import uploadImage from '../image/uploadImage.png';
import Navigation from '../components/Navigation';

const Mainpage = () => {
    return (
        <div>
            <Navigation />
            <Background />
        </div>
    );
};

const Background = () => (
    <div className="M-background">
        <UploadBox />
    </div>
);

const Logo = () => (
    <svg className="icon" x="0px" y="0px" viewBox="0 0 24 24">
        <path fill="transparent" d="M0,0h24v24H0V0z" />
        <image xlinkHref={uploadImage} width="24px" height="24px" />
    </svg>
);

const FileInfo = ({ uploadedInfo }) => {
    if (!uploadedInfo) return null;

    const { imageUrl } = uploadedInfo;

    return (
        <div className="preview_info">
            {imageUrl && <img src={imageUrl} alt="Preview" style={{ width: '400px', maxHeight: '400px' }} />}
        </div>
    );
};


const UploadBox = () => {
    const [uploadedInfo, setUploadedInfo] = useState(null);
    const [isActive, setActive] = useState(false);

    const handleDragStart = () => setActive(true);
    const handleDragEnd = () => setActive(false);

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setActive(false);
    
        const file = event.dataTransfer.files[0];
        setFileInfo(file); 
    };

    const setFileInfo = (file) => {
        const { name, type } = file;
        const isImage = type.startsWith('image/');
        const size = (file.size / (1024 * 1024)).toFixed(2) + 'MB';
    
        if (!isImage) {
            setUploadedInfo({ name, size, type });
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setUploadedInfo({ name, size, type, imageUrl: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleUpload = ({ target }) => {
        const file = target.files && target.files[0];
        if (file) {
            setFileInfo(file);
        }
    };
    
    

    return (
        <label
            className={`preview${isActive ? ' active' : ''}`}
            onDragEnter={handleDragStart}
            onDragOver={handleDragOver}
            onDragLeave={handleDragEnd}
            onDrop={handleDrop}
        >
            <div className="upload-box">
                <input type="file" className="drag-file" onChange={handleUpload} />
                <FileInfo uploadedInfo={uploadedInfo} />
                {!uploadedInfo && (
                    <>
                        <Logo />
                        <p className="upload-text">사진 파일을 업로드하거나 클릭</p>
                        <p className="sub-text">또는 여기에 파일 끌어다놓기</p>
                        <p className="sub-sub-text">*.jpg 또는 .png 파일만 첨부 가능</p>
                    </>
                )}
            </div>
        </label>
    );
}

export default Mainpage;
