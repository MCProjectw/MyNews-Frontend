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
    const [error, setError] = useState("");  // 에러 상태 추가

    const handleChange = (e) => {
        const { value, name } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
        else if (name === "confirmPassword") setConfirmPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        const body = { email, password };

        try {
            const res = await dispatch(registerUser(body));
            if (res.payload.success) {
                navigate("/");  // 회원가입 성공 시 메인 페이지로 이동
            } else {
                setError(res.payload.error || "회원가입에 실패했습니다.");
            }
        } catch (err) {
            setError("서버 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <Title>회원가입</Title>
                {error && <ErrorText>{error}</ErrorText>} {/* 에러 메시지 출력 */}
                <StyledInput
                    name="email"
                    type="email"
                    placeholder="아이디를 입력해주세요"
                    value={email}
                    onChange={handleChange}
                    required
                />
                <StyledInput
                    name="password"
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={handleChange}
                    required
                />
                <StyledInput
                    name="confirmPassword"
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요"
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />
                <SignupButton type="submit">회원가입</SignupButton>
            </FormContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`;

const Title = styled.h2`
    margin-bottom: 1.5rem;
    text-align: center;
    color: #333;
`;

const StyledInput = styled.input`
    margin-bottom: 1rem;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    &:focus {
        border-color: #555;
        outline: none;
    }
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SignupButton = styled.button`
    padding: 0.75rem;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

const ErrorText = styled.p`
    color: red;
    margin-bottom: 1rem;
    text-align: center;
`;

export default Register;
