import { useState } from "react";
import styled from "styled-components";

const Weather = () => {
    const [temperature, setTemperature] = useState("");
    const [place, setPlace] = useState("");
    const [description, setDescription] = useState("");

    const WEATHER_API = import.meta.env.VITE_WEATHER_API;

    const handleBtnClick = () => {
        const lat = 37.5665;
        const lng = 126.9780;
        getWeather(lat,lng);

    }
    const getWeather = async(lat, lng) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API}&units=metric&lang=kr`);
            if(!response.ok) throw new Error("Failed to fetch weather data");

            const json = await response.json();
            if (json.main && json.weather) {
                setTemperature(json.main.temp);
                setPlace(json.name);
                setDescription(json.weather[0].description);
            }else {
                throw new Error("Invaild data structure");
            }
        } catch(error) {
            alert(`Error: ${error.message}`);
        }
    }
    return(
        <Container>
            <StyledDl>
                <Btn onClick={handleBtnClick}>오늘의 날씨:</Btn>
                <dd>위치:</dd>
                <dd>{place}</dd>
                <dt>온도:</dt>
                <dd>{temperature}</dd>
                <dt>날씨:</dt>
                <dd>{description}</dd>
            </StyledDl>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    position: relative;
    right: 0;
`;
const Btn = styled.div`
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
`;
const StyledDl = styled.dl`
    display: flex;
    font-size: 16px;
    margin-top: 20px;
    align-items: center;
    font-weight: bold;
`;
export default Weather;