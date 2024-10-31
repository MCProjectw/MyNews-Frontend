import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "./type";

// 회원가입 비동기 액션
export const registerUser = (dataToSubmit) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            // 회원가입 성공 시 Redux store에 등록
            dispatch({
                type: REGISTER_USER,
                payload: data,
            });

            return data;

        } catch (error) {
            console.error('Error during registration:', error);
            throw error;  // 에러를 상위 컴포넌트로 전달
        }
    };
};

// 로그인 비동기 액션
export const loginUser = (dataToSubmit) => {
    return async (dispatch) => {
        try {
            // console.log(import.meta.env.)
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // 로그인 성공 시 Redux store에 사용자 정보 저장
            dispatch({
                type: LOGIN_USER,
                payload: {token: data.token, user: data.user},
            });

            return data;

        } catch (error) {
            console.error('Error during login:', error);
            throw error;  // 에러를 상위 컴포넌트로 전달
        }
    };
};

// 인증 비동기 액션
export const auth = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Authorization failed');
            }

            // 인증 성공 시 사용자 정보 저장
            dispatch({
                type: AUTH_USER,
                payload: data,
            });

            return data;

        } catch (error) {
            console.error('Error during authorization:', error);
            throw error;  // 에러를 상위 컴포넌트로 전달
        }
    };
};
