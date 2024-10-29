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
            <StyledNews>고등학교 관련 뉴스</StyledNews>
            <NewsUl>
                {highSchoolNews.map((news, idx) => (
                    <NewsLi key={idx}><a href={news.link} rel="noopener noreferrer">{news.title}</a></NewsLi>
                ))}
            </NewsUl>

            <StyledNews>딥페이크 관련 뉴스</StyledNews>
            <NewsUl>
                {deepfakeNews.map((news, idx) => (
                    <NewsLi key={idx}><a href={news.link} target="_blank" rel="noperner norerferrer">{news.title}</a></NewsLi>
                ))}
            </NewsUl>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
`;

const StyledNews = styled.h1``;
const NewsUl = styled.ul``;
const NewsLi = styled.li``;
export default NewsList;