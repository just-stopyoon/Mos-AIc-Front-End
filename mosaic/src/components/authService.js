// authService.js
import axios from "axios";

export const idDuplicateCheck = async (id) => {
  try {
    const response = await axios.post(
      "https://port-0-back-end-am952nlsys9dvi.sel5.cloudtype.app/dup",
      { id }
    );

    console.log("Server response:", response.data); // 서버 응답을 콘솔에 출력

    if (response.data === true) {
      // 이미 사용 중인 아이디일 때는 진행하지 않음
      return { result: true, message: "이미 사용중인 아이디입니다." };
    }

    return { result: false, message: "사용 가능한 아이디입니다." };
  } catch (error) {
    console.error(error);
    return { result: false, message: "아이디가 중복되었습니다." };
  }
};

export const signup = async (id, pwd) => {
  try {
    const response = await axios.post(
      "https://port-0-back-end-am952nlsys9dvi.sel5.cloudtype.app/signin",
      { id, pwd }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { result: "false", message: "서버 오류가 발생했습니다." };
  }
};
