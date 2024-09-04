import axios from "axios";
import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "./type";

const login_user = (dataToSubmit) => {
    const request = axios
    .post("/api/user/login", dataToSubmit)
    .then((res) => res.data);

    return {
        tpye: LOGIN_USER,
        payload: request,
    };
};

const register_user = (dataToSubmit) => {
    const request = axios
    .post("/api/user/register", dataToSubmit)
    .then((res) => res.data);

    return {
        type: REGISTER_USER,
        payload: request
    };
};

const auth = () => {
    const request = axios.get("/api/user/auth").then((res) => res.data);
    return {
        type: AUTH_USER,
        payload: request
    };
};

export default {
    login_user,
    register_user,
    auth
};