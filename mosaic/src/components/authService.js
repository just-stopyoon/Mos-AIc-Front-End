// authService.js
import axios from 'axios';

export const idDuplicateCheck = async (id) => {
    try {
        const response = await axios.post('https://port-0-back-end-am952nlsys9dvi.sel5.cloudtype.app/', { id });
        return response.data.message === '사용 가능한 아이디입니다.';
    }
    catch (error) {
        console.error(error);
        return false;
    }
};

export const signup = async (id, password) => {
    try {
        const response = await axios.post('https://port-0-back-end-am952nlsys9dvi.sel5.cloudtype.app/', { id, password });
        return response.data.message === '회원가입이 완료되었습니다.';
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
