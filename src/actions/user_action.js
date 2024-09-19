import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "./type";

export const registerUser = async (dataToSubmit) => {
    const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
    });

    const data = await response.json();

    return {
        type: REGISTER_USER,
        payload: data,
    };
};

export const loginUser = async (dataToSubmit) => {
    const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
    });

    const data = await response.json();

    return {
        type: LOGIN_USER,
        payload: data,
    };
};

export const auth = async () => {
    const response = await fetch('/api/auth', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    return {
        type: AUTH_USER,
        payload: data,
    };
};