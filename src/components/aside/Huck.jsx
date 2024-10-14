import { styled } from "styled-components";

const Huck = () => {
    return(
        <Container>
            <LeftBox>
                    <LeftText>최근이슈</LeftText>
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
    padding-top: 5em;
    background-color: #EBEBEB;
`;
const LeftBox = styled.div`
    width: 720px;
    height: 700px;
    background-color: #fff;
    border-radius: 20px;
`;
const LeftText = styled.p`
    width: 90%;
    margin: auto;
    padding-top: 20px;
    border-bottom: 1px solid #1D99FF;
`;
const RightBox = styled.div`
    width: 700px;
    height: 700px;
    background-color: #87f;
    border-radius: 20px;
`;
const FirstArticleBox = styled.article``;
const SecondArticleBox = styled.article``;
export default Huck;