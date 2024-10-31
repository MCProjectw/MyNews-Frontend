import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const NewsList = () => {
    const [highSchoolNews, setHighSchoolNews] = useState([]);
    const [deepfakeNews, setDeepfakeNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const responseHighSchool = await fetch(`${import.meta.env.VITE_API_URL}/news/highschool`)
                const highSchoolData = await responseHighSchool.json();
                setHighSchoolNews(highSchoolData);

                const responseDeepfake = await fetch(`${import.meta.env.VITE_API_URL}/news/deepfake`);
                const deepfakeData = await responseDeepfake.json();
                setDeepfakeNews(deepfakeData);
            } catch (error) {
                console.log(`Failed response News Error Message : ${error.message}`);
            }
        };
        fetchNews();
    }, []);
    return(
        <Container>
            <Header>
                <StyledNews>최근이슈</StyledNews>
                <StyledHr></StyledHr>
            </Header>
            <Section>
                <Society>사회</Society>
                <Site>
                    <NewsTitle>중·고등학교 기숙사 25.6% ‘선발기준은 성적'</NewsTitle>
                    <TitleImage />
                </Site>
                <Society>사회</Society>
                <Site>
                    <NewsTitle>"50점 맞던 애가 90점 맞았다"…발칵 뒤집힌 분당 고등학교, 왜</NewsTitle>
                    <SecondTitleImage />
                </Site>
                <Society>사회</Society>
                <Site>
                    <NewsList>두 살 아이 있는데 고3 제자와 애정행각…"속옷서 체액까지" 충격</NewsList>
                    <FinalTitleImage />
                </Site>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
`;

const Header = styled.header`
    padding-top: 30px;
    padding-left: 20px;
`;
const Section = styled.section`
    padding-left: 40px;
`;
const NewsTitle = styled.div`
    font-size: 20px;
`;
const Site = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
`;
const SecondTitleImage = styled.div`
    background: url("./images/News.jpg") no-repeat center/cover;
    width: 250px;
    height: 150px;
`;
const FinalTitleImage = styled.div`
    background: url("./images/No.jpg") no-repeat center/cover;
    width: 250px;
    height: 150px;
`;
const TitleImage = styled.div`
    background: url("./images/New.png") no-repeat center/cover;
    width: 250px;
    height: 150px;
`;
const Society = styled.div`
    padding-top: 6rem;
    font-size: 18px;
    color: #837f7f;
`;
const StyledNews = styled.div`
    font-size: 17px;
    font-weight: bold;
    padding-bottom: 0.4rem;
`;
const StyledHr = styled.div`
    width: 300px;
    height: 2px;
    background-color: #1D99FF;
`;
export default NewsList;