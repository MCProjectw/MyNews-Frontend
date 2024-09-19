import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerUser } from "../actions/user_action";

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = (e) => {
        const { value, name } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
        else if (name === "confirmPassword") setConfirmPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");

        const body = { email, password };

        dispatch(registerUser(body)).then((res) => {
            if(res.payload.success) navigate("/");
            else alert("Error");
        });
    };

    <Container>
        <FormContainer onSubmit={handleSubmit}>
            <Title>회원가입</Title>
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
                value={password}
                onChange={handleChange}
            />
            <StyledInput
                name="confirmPassword"
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                value={confirmPassword}
                onChange={handleChange}
            />
            <SignupButton type="submit">회원가입</SignupButton>
        </FormContainer>
    </Container>
}

const Container = styled.div`
    flex: 1;
`;
const Title = styled.h2``;
const StyledInput = styled.input``;
const FormContainer = styled.form``;
const SignupButton = styled.button``;
export default Register;