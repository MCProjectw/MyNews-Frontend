import styled from "styled-components";
import Logo from "../icon/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * as fa from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
    return (
        <Container>
            <StyledContent>
                <Logo />
                <StyledContainer>
                    <MainBtn>주요기능</MainBtn>
                    <SecondBtn>기술실현</SecondBtn>
                    <ThirdBtn>기대효과</ThirdBtn>
                    <FeedbackBtn>문의 및 피드백</FeedbackBtn>
                </StyledContainer>
                <StyledIsBtn>
                    <StyledLoginInput>로그인</StyledLoginInput>
                    <StyledRegisterInput>회원가입</StyledRegisterInput>
                </StyledIsBtn>
            </StyledContent>
        </Container>
    )
}

const Container = styled.div`
    height: 178px;
    background-color: #2a2a2a;
`;
// const Icon = styled(FontAwesomeIcon)``;
const StyledContent = styled.div`
    width: 95%;
    height: 178px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;
const StyledIsBtn = styled.div`
    display: flex;
    gap: 10px;
    position: absolute;
    top: 40%;
    right: 0%;
`;
const StyledLoginInput = styled.button`
    padding: 15px 25px;
    border-radius: 5px;
    border: none;
    background-color: #FFE500;
    font-size: 15px;
    cursor: pointer;
`;
const StyledRegisterInput = styled.button`
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #FFE500;
    background-color: #2a2a2a;
    color: #FFE500;
    font-size: 15px;
    cursor: pointer;
`;
const StyledContainer = styled.div`
    display: flex;
    gap: 2.5em;
    position: absolute;
    left: 15%;
    top: 40%;
`;
const MainBtn = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`;
const SecondBtn = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`;
const ThirdBtn = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`;
const FeedbackBtn = styled.div`
    font-size: 25px;
    font-weight: bold ;
    color: #fff;
    cursor: pointer;
`;
export default MainPage;