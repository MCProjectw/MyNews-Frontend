import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginUser } from "../actions/user_action";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useState로 email, password 상태 관리
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  // password 오타 수정
    const [error, setError] = useState("");        // 에러 메시지 상태 추가

    // input 핸들링 함수
    const handleChange = (e) => {
        const { value, name } = e.target;
        if (name === "email") setEmail(value);
        else if (name === "password") setPassword(value);
    };

    // 로그인 폼 제출 처리 함수
    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = { email, password };  // 오타 수정된 password 사용

        try {
            const response = await dispatch(loginUser(body)); // loginUser Redux action 호출
            if (response.payload.loginSuccess) {
                // 로그인 성공 시 메인 페이지로 이동
                navigate("/");
            } else {
                setError("아이디 또는 비밀번호가 올바르지 않습니다.");
            }
        } catch (err) {
            // 서버나 네트워크 오류 처리
            setError("서버에 문제가 발생했습니다. 나중에 다시 시도해주세요.");
        }
    };

    return (
        <Container>
            <FormContainer method="post" onSubmit={handleSubmit}>
                <LoginTitle>로그인</LoginTitle>
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
                <LoginBtn type="submit">로그인</LoginBtn>
                {error && <ErrorText>{error}</ErrorText>} {/* 에러 메시지 출력 */}
                <SignUp to="/register">회원가입</SignUp>
            </FormContainer>
        </Container>
    );
};

// 간단한 스타일 정의
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.h2`
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

const LoginBtn = styled.button`
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
    margin-top: 0.5rem;
`;

const SignUp = styled(Link)`
    margin-top: 1rem;
    text-align: center;
    color: #007bff;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export default LoginPage;
