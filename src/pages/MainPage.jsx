import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "../icon/Logo";
import Nav from "../components/aside/Nav";
const MainPage = () => {
    return (
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
            <MainImages>
                <MainText>
                    <MyNews>My News에서 한눈에</MyNews>
                </MainText>
                <HighSchool>고등학생에게 필요한 정보들을 MyNews에서 한눈에 알아보세요. <br /> 고등학생이 알면 좋은 다양한 정보들을 제공해드리는 웹사이트 입니다</HighSchool>
                <News to="/Issue">뉴스 보러 바로가기</News>
            </MainImages>
            <Footer>
                <Logo />
                <FooterText>
                    <EmailText>이메일 주소 개인정보 방침</EmailText>
                    <DigitechText href="https://sdh.sen.hs.kr/78396/subMenu.do">서울 디지텍 고등학교 오시는 길</DigitechText>
                </FooterText>
            </Footer>
        </Container>
    )
}


const Container = styled.div`
    flex: 1;
    background-color: #fff;
`;
const Footer = styled.footer`
    padding-left: 20px;
    display: flex;
    align-items: center;
    background-color: #D4D4D4;
`;

const FooterText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 120px;
    line-height: 2rem;
`;
const MainText = styled.div`
    position: absolute;
    left: 10%;
    top: 40%;
`;
const EmailText = styled.div`
    font-size: 25px;
    font-weight: bold;
`;
const DigitechText = styled.a`
    font-size: 23px;
    font-weight: bold;
`;
const MyNews = styled.p`
    color: #fff;
    font-size: 6rem;
    font-weight: bold;
`
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
const MainImages = styled.div`
    background: url("./images/MainPage.png"), no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;
const HighSchool = styled.p`
    position: absolute;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    top: 65%;
    left: 10%;
`;
const News = styled(Link)`
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #fff;
    color: #333;
    padding: 13px 18px;
    border-radius: 10px;
    position: absolute;
    top: 90%;
    left: 10%;
`;
export default MainPage;