// authService.js
import axios from "axios";

export const idDuplicateCheck = async (id) => {
  try {
    const response = await axios.post(
      "https://port-0-back-end-am952nlsys9dvi.sel5.cloudtype.app/signup",
      { id }
    );
    return response.data.type === "dup"
      ? { result: "true", message: "이미 사용중인 아이디입니다." }
      : { result: "false", message: "사용 가능한 아이디입니다." };
  } catch (error) {
    console.error(error);
    return { result: "false", message: "서버 오류가 발생했습니다." };
  }
};

export const signup = async (id, password, confirm) => {
  try {
    const response = await axios.post(
      "https://port-0-back-end-am952nlsys9dvi.sel5.cloudtype.app/signup",
      { id, password, confirm }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { result: "false", message: "서버 오류가 발생했습니다." };
  }
};
