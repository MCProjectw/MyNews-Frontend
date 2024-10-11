import styled from "styled-components";

const Huck = () => {
    return (
        <Container>
            <StyledSection>
                <SectionHeader>
                    <Box>

                    </Box>
                    <Content>
                        <SecondBox ></SecondBox>
                        <ThBox></ThBox>
                    </Content>
                </SectionHeader>
            </StyledSection>
        </Container>
    );
};

const Container = styled.div`
    flex: 1;
`;
const StyledSection = styled.section`
    display: flex;
    width: 80%;
    margin: 0 auto;
    height: 100vh;
    background-color: red;
`;
const SectionHeader = styled.div`
    width: 100%;
    height: 700px;
`;
const Box = styled.div`
    width: 60%;
    background-color: #ededed;
    height: 700px;
    border-radius: 10px;
`;
const Content = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: end;
`;
const SecondBox = styled.div`
    width: 65%;
    height: 300px;
    background-color: #3dd;
    border-radius: 10px;
`;
const ThBox = styled.div`
    width: 65%;
    height: 400px;
    background-color: #4eed;
    border-radius: 10px;
`;
export default Huck;