import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "../icon/Logo";

const MainPage = () => {
    const clickSum = document.querySelectorAll("#sum");

    clickSum.forEach(isClick => {
        isClick.addEventListener("click", (e) => {
            e.preventDefault();
            if(clickSum) {
                e.classList.add("active");
            } else {
                e.classList.remove("active");
            }
            isClick.style.textDecoration = "Underline";
        });
    });
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
            <StyledNav>
                <div id="sum" className="active" style={{cursor: "pointer"}}>최근이슈</div>
                <div id="sum" style={{cursor: "pointer"}}>사회정보</div>
                <div id="sum" style={{cursor: "pointer"}}>이달의 정보</div>
                <div id="sum" style={{cursor: "pointer"}}>블로그</div>
            </StyledNav>
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
const StyledNav = styled.div` 
    border-top: 1px solid #D5D5D5;
    height: 70px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    gap: 5rem;
    padding-left: 15em;
`;
export default MainPage;