import styled from "styled-components";
import Nav from "../components/aside/Nav";
import Logo from "../icon/Logo";
import { Link } from "react-router-dom";
import Weather from "../components/weather/WeatherAPI";
import NewsList from "../components/weather/NewsList";

const IssuePage = () => {
    return (
        <Container>
            <Wrap>
                <StyledHeader>
                    <Logo />
                    <HeaderText>한국 고등학생을 위한 뉴스정보</HeaderText>
                    <Content>
                        <LoginBtn to="/login">로그인</LoginBtn>
                        <RegisterBtn to="/register">회원가입</RegisterBtn>
                    </Content>
                </StyledHeader>
                <Nav />
            </Wrap>
            <StyledWeatherContainer>
                <Weather />
            </StyledWeatherContainer>
            <Box>
                <NewsList />
            </Box>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
    // background-color: #fff;
`;
const Box = styled.div`
    background-color: #fff;
    width: 1396px;
    height: 756px;
    border-radius: 10px;
    margin: 0 auto;
`;
const Wrap = styled.div`
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
const StyledWeatherContainer = styled.div`
    margin-top: 100px;
    margin-bottom: 50px;
    background-color: #fff;
    width: 400px;
    height: 50px;
    margin-left: 58.7%;
    border-radius: 6px;
`;
export default IssuePage;