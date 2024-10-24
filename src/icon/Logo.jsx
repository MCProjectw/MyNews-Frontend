import { useState } from "react";
import styled from "styled-components";

const Logo = () => {

    const handleClick = () => {
        window.location.href = "/";
    }
    return(
        <Container>
            <StyledImage onClick={handleClick} />
        </Container>
    );
};

const Container = styled.div``;
const StyledImage = styled.div`
    background-image: url("./images/MNLogo.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 120px;
    height: 90px;
    cursor: pointer;
`;
export default Logo;