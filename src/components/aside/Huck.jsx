import { styled } from "styled-components";

const Huck = () => {
    return(
        <Container>
            <LeftBox>
                <AisdeBox></AisdeBox>
            </LeftBox>
            <RightBox>
                <FirstArticleBox></FirstArticleBox>
                <SecondArticleBox></SecondArticleBox>
            </RightBox>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    background-color: #EBEBEB;
`;
const LeftBox = styled.div`
    width: 720px;
    height: 700px;
    background-color: red;
`;
const AisdeBox = styled.div`

`;
const RightBox = styled.div`
    width: 700px;
    height: 700px;
    background-color: #87f;
`;
const FirstArticleBox = styled.article``;
const SecondArticleBox = styled.article``;
export default Huck;