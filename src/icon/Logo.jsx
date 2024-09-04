import styled from "styled-components";

const Logo = () => {
    return(
        <Container>
            <StyledImage />
        </Container>
    );
};

const Container = styled.div``;
const StyledImage = styled.div`
    background-image: url("Logo.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 200px;
    height: 250px;
`;
export default Logo;