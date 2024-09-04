import styled from "styled-components";
import Logo from "../icon/Logo";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * as fa from "@fortawesome/free-solid-svg-icons";

const MainPage = () => {
    return(
        <Container>
            <Logo />
            <Icon icon="fa-sharp fa-solid fa-bell" />
        </Container>
    )
}

const Container = styled.div`
    background-color: #333;
    width: 100vw;
    height: 100vh;
`;
// const Icon = styled(FontAwesomeIcon)``;
export default MainPage;