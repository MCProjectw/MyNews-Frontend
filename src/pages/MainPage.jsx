import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "../icon/Logo";
import Nav from "../components/aside/Nav";
import Huck from "../components/aside/Huck"
const MainPage = () => {
    return(
        <Container>
            <StyledHeader>
                <Logo />
                <HeaderText>한국 고등학생을 위한 뉴스정보</HeaderText>
                <Content>
                    <LoginBtn to="/login">로그인</LoginBtn>
                    <RegisterBtn to="/register">회원가입</RegisterBtn>   
                </Content>
            </StyledHeader>
            <Nav />
            <Huck />
        </Container>
    )
}


const Container = styled.div`
    flex: 1;
    background-color: #fff;
`;
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    height: 8rem;
`;
const HeaderText = styled.div`
    color: #1D99FF;
    font-size: 22px;
    font-weight: bold;
`;
const Content = styled.div`
    display: flex;
    gap: 20px;
    // border: 1px solid black;
`;
const LoginBtn = styled(Link)`
    padding: 12px 30px;
    background-color: #1D99FF;
    color: #fff;
    border-radius: 6px;
    font-weight: bold;
`;
const RegisterBtn = styled(Link)`
    padding: 12px 22px;
    border: 1px solid #1D99FF;
    border-radius: 6px;
    color: #1D99FF;
    font-weight: bold;
`;
export default MainPage;