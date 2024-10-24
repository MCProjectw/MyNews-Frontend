import { useState } from "react";
import styled from "styled-components";

const weather = () => {
    const [temperature, setTemperaeture] = useState("");
    const [place, setPlace] = useState("");
    const [description, setDescrition] = useState("");

    const WEATHER_API = process.env.WEATHER_API;

    const handleBtnClick = () => {
        const lat = 37.5665;
        const lng = 126.9780;
        getWeather(lat,lng);
    }
    const getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`)
        .then((response) => response.json)
        .then((json) => {
            setTemperaeture(json.main.temp);
            setPlace(json.name);
            setDescrition(json.weather[0].description);
        })
        .catch((error) => alert(error))
    }
    return(
        <Container>
            <Btn onClick={handleBtnClick}>오늘의 날씨</Btn>
            <dl>
                
            </dl>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
`;
const Btn = styled.div`

`;
export default weather;