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
            <h1>고등학교 관련 뉴스</h1>
            <ul>
                {highSchoolNews.map((news, idx) => (
                    <li key={idx}><a href={news.link} rel="noopener noreferrer">{news.title}</a></li>
                ))}
            </ul>

            <h2>딥페이크 관련 뉴스</h2>
            <ul>
                {deepfakeNews.map((news, idx) => (
                    <li key={idx}><a href={news.link} target="_blank" rel="noperner norerferrer">{news.title}</a></li>
                ))}
            </ul>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
`;
export default NewsList;