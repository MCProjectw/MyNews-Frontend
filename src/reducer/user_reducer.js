import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "../actions/type";

const initialState = {
    loginSuccess: null,     // 로그인 성공 여부 (true/false/null)
    register: null,         // 회원가입 결과
    userData: null,         // 사용자 데이터
    error: null,            // 에러 메시지
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loginSuccess: action.payload.loginSuccess, // 성공 여부만 저장
                error: action.payload.error || null,      // 에러 메시지
            };

        case REGISTER_USER:
            return {
                ...state,
                register: action.payload.registerSuccess,  // 성공 여부만 저장
                error: action.payload.error || null,       // 에러 메시지
            };

        case AUTH_USER:
            return {
                ...state,
                userData: action.payload,
                error: null,                                // 인증 성공 시 에러 초기화
            };

        default:
            return state;
    }
};
