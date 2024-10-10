import styled from "styled-components";
import Logo from "../icon/Logo";
import { Link } from "react-router-dom";

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
                    <StyledLoginInput to="/login">로그인</StyledLoginInput>
                    <StyledRegisterInput to="/register">회원가입</StyledRegisterInput>
                </StyledIsBtn>
            </StyledContent>
            <StyledTimeText>
                시간과 노력을 절약하는 지역 <br />
                맞춤 뉴스
            </StyledTimeText>
        </Container>
    )
}

const Container = styled.div`
    background-image: url("./images/image.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    filter: brightness();
`;
const StyledTimeText = styled.div`
    height: 80vh;
    color: #FFE500;
    font-size: 50px;
    font-weight: bold;
`;
const StyledContent = styled.div`
    background-color: #2a2a2a;
    /* width: 95%; */
    height: 130px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
`;
const StyledIsBtn = styled.div`
    display: flex;
    gap: 10px;
    position: absolute;
    top: 30%;
    right: 2%;
`;
const StyledLoginInput = styled(Link)`
    padding: 15px 25px;
    border-radius: 5px;
    border: none;
    background-color: #FFE500;
    font-size: 15px;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
`;
const StyledRegisterInput = styled(Link)`
    padding: 13px 15px;
    border-radius: 5px;
    border: 1px solid #FFE500;
    background-color: #2a2a2a;
    color: #FFE500;
    text-decoration: none;
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
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`;
const SecondBtn = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`;
const ThirdBtn = styled.div`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
`;
const FeedbackBtn = styled.div`
    font-size: 22px;
    font-weight: bold ;
    color: #fff;
    cursor: pointer;
`;
export default MainPage;