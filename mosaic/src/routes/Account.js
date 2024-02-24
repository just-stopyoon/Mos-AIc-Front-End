import React, { useState } from "react";
import axios from "axios";
import './Account.css';
import { Link, useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';
import { idDuplicateCheck, signup } from '../components/authService.js';

function Account() {
    return (
        <div>
            <Background/>
        </div>
    )
};

const Background = () => (
    <div className="A-background">
        <MakeAccount/>
    </div>
)

const MakeAccount = () => {
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const [isIdCheck, setIsIdCheck] = useState(false);
    const [isIdAvailable, setIsIdAvailable] = useState(false);
    
    const navigate = useNavigate();

    const onChangeIdHandler = async (e) => { // idCheckHandler의 호출을 비동기로 변경
        const idValue = e.target.value;
        setID(idValue);
        await idCheckHandler(idValue); // idCheckHandler 함수를 비동기로 호출하고 결과를 기다림
    }

    const onChangePasswordHandler = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
            passwordCheckHandler(value, confirm);
        }
        else {
            setConfirm(value);
            passwordCheckHandler(password, value);
        }
    }
    
    const idCheckHandler = async (id) => {
        if (id === ''){
            setIdError('아이디를 입력해주세요.');
            setIsIdAvailable(false);
            return false;
        }
        try {
            const responseData = await idDuplicateCheck(id);
            if (responseData) {
                setIdError('사용 가능한 아이디입니다.');
                setIsIdCheck(true);
                setIsIdAvailable(true);
                return true;
            }
            else{
                setIdError('이미 사용중인 아이디입니다.');
                setIsIdAvailable(false);
                return false;
            }
        }
        catch (error) {
            alert('서버 오류입니다. 관리자에게 문의하세요.');
            console.error(error);
            return false;
        }
    }
    

    const passwordCheckHandler = (password, confirm) => {
        if (password === ''){
            setPasswordError('비밀번호를 입력해주세요.');
            return false;
        }
        else if (confirm !== password){
            setPasswordError('');
            setConfirmError('비밀번호가 일치하지 않습니다.');
            return false;
        }
        else{
            setPasswordError('');
            setConfirmError('');
            return true;
        }
    }

    const signupHandler = async(e) => {
        e.preventDefault();

        const idCheckresult = await idCheckHandler(id);
        if (idCheckresult !== false){
            setIdError('');
        }
        else{
            return ;
        }

        const passwordCheckResult = passwordCheckHandler(password, confirm);
        if (passwordCheckResult !== false) {
            setPasswordError('');
            setConfirmError('');
        }
        else{
            return;
        }

        try {
            const responseData = await signup(id, password);
            if (responseData) {
                localStorage.setItem('loginId', id);
                navigate('/login'); // 회원가입이 완료되면 '/login'으로 이동
            }
            else{
                alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
            }
        }
        catch(error){
            alert('회원가입에 실패하였습니다. 다시 시도해주세요.');
            console.error(error);
        }
    }
    
    return (
        <div>
            <div className="A-rectangle">
                <Link to="/" style={{ textDecoration: "none" }} className="A-Title-text"> {/* Link 컴포넌트로 변경 */}
                    Mos-<span className="A-highlighted-text">AI</span>c
                </Link>
                <p className="A-account-title">회원가입</p>
                <form onSubmit={signupHandler}>
                    <input
                        className="A-email-box"
                        onChange={onChangeIdHandler}
                        type='text'
                        id='id'
                        name='id'
                        value={id}
                        maxLength={10}
                        placeholder='ID'
                    />
                    {idError && <small className={isIdAvailable ? 'idAvailable' : 'idAvailable'}>{idError}</small>} {/* 클래스명 수정 */}
                    <input
                        className="A-password-box"
                        onChange={onChangePasswordHandler}
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        maxLength={16}
                        placeholder='PW'
                    />
                    <input
                        className="A-password-box"
                        onChange={onChangePasswordHandler}
                        type='password'
                        id='confirm'
                        name='confirm'
                        value={confirm}
                        maxLength={16}
                        placeholder='PW again'
                    />
                    {confirmError && <small className="idAvailable">{confirmError}</small>} {/* 클래스명 수정 */}
                    <br/>
                    <button type='submit' className="A-account-Button">
                        회원가입
                    </button>
                </form>
                <br/>
            </div>
        </div>
    );
}

export default Account;
