import { useEffect, useState } from "react";
import { weatherService } from "../services/weatherService";
import { WeatherData } from "../cmps/WeatherData";
import { WeatherImg } from "../cmps/WeatherImg";
import styled from "styled-components";
import loader from "../assets/imgs/loader.svg";
const StyledButton = styled.button`
  font-size: 25px;
  font-weight: 700;
  color: rgb(57, 118, 230);
  cursor: pointer;
  margin-right: 55%;
  margin-bottom:15px;
  border-radius: 50%;
  height: 35px;
  background-color: azure;
  border: none;
`;
const StyledSection = styled.div`
 width:200px;
 display:flex;
 flex-direction:column;
 gap:4px;
 margin-top:10%;
`;
const StyledTitle = styled.div`
  margin-right: 52%;
  margin-top: 5px;
`;
const StyledSubTitle = styled.div`
  color: black;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bolder;
`;

export const WeatherDetails = ({ history, match }) => {
  const [weather, setWeather] = useState(undefined);
  useEffect(() => {
    loadweather();
  }, []);
  const goBack = () => {
    history.push("/");
  };
  const loadweather = () => {
    const { id } = match.params;
    const weather = weatherService.getById(id);
    setWeather(weather);
  };
  return !weather ? (
    <img className="loader" src={loader} alt="" />
  ) : (
    <div className="weather-details text-center">
      <StyledButton onClick={goBack}>←</StyledButton>
      <StyledTitle>{weatherService.getCountry()}</StyledTitle>
      <div className="flex space-around">
        <div>
          <WeatherImg weather={weather} />
          <WeatherData weather={weather} />
        </div>
        <StyledSection>
        <StyledSubTitle data-trans="Sources">Sources</StyledSubTitle>
        {weatherService.getSources().map((source) => (
          <a href={source.url}>{source.title}</a>
        ))}
        </StyledSection>
      </div>
    </div>
  );
};
