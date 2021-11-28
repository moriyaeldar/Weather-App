import { useEffect, useState } from "react";
import { weatherService } from "../services/weatherService";
import { WeatherData } from "../cmps/WeatherData";
import styled from "styled-components";
import loader from "../assets/imgs/loader.svg";
const StyledButton = styled.button`
  font-size: 25px;
  font-weight: 700;
  color: rgb(57, 118, 230);
  cursor: pointer;
  margin-right: 55%;
  border-radius: 50%;
  height: 35px;
  background-color: azure;
  border: none;
`;
const StyledTitle = styled.h2`
margin-right:52%;
margin-top:5px
`;

export const WeatherDetails = ({ history, match }) => {
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    loadweather();
  },[]);

  const goBack = () => {
    history.push("/");
  };

  const loadweather = () => {
    const { id } = match.params;
    const weather = weatherService.getById(id);
    setWeather(weather);
    console.log(weather);
  };

  return !weather ? (
    <img className="loader" src={loader} alt="" />
  ) : (
    <>
      <StyledButton onClick={goBack}>←</StyledButton>
      <StyledTitle>{weatherService.getCountry()}</StyledTitle>
      <div className="flex space-around">
      <WeatherData weather={weather}></WeatherData>
      <div className="sources flex column">
        <h3 data-trans="Sources">Sources</h3>
        {weatherService.getSources().map((source) => (
          <a href={source.url}>{source.title}</a>
        ))}
      </div>
      </div>
    </>
  );
};
