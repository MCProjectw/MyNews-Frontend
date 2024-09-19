import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginUser } from "../actions/user_action";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [passowrd, setPassword] = useState("");

    const handleChange = (e) => {
        const {value, name} = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {email, passowrd};

        dispatch(loginUser(body)).then((res) => {
            if (res.payload.loginSuccess) {
                navigate("/");
            } else {
                alert("Error");
            }
        }) 
    }

    return(
        <Container>
            <FormContainer method="post" onSubmit={handleSubmit}>
                <LoginTitle>로그인</LoginTitle>
                <StyledInput
                    name="email"
                    type="email"
                    placeholder="아이디를 입력해주세요"
                    value={email}
                    onChange={handleChange}
                />
                <StyledInput
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={passowrd}
                    onChange={handleChange}
                />
                <LoginBtn type="submit">로그인</LoginBtn>
                <SignUp to="/register">회원가입</SignUp>
            </FormContainer>
        </Container>
    )
}

flex: 1;
const Container = styled.div`
`;
const FormContainer = styled.form`
`;
const LoginTitle = styled.div``;
const StyledInput =  styled.input``;
const LoginBtn = styled.button``;
const SignUp = styled(Link)``;
export default LoginPage;