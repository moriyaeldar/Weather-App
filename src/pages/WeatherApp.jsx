import { useEffect, useState } from "react";
import { WeatherList } from "../cmps/WeatherList";
import { TimeData } from "../cmps/TimeData";
import { WeatherFilter } from "../cmps/WeatherFilter";
import { weatherService } from "../services/weatherService.js";
import loader from "../assets/imgs/loader.svg";
import styled from "styled-components";
const StyledTitle = styled.div`
 font-size:30px;
 font-weight:bold;
`;
export const WeatherApp = () => {
  const [weather, setWether] = useState(undefined);
  useEffect(() => {
    getWeatherData("2459115");
  },[]);
  const getWeatherData = async (filterBy) => {
    const weather = await weatherService.query(filterBy);
    setWether(weather);
  };
  const onChangeFilter = async (filterBy) => {
    getWeatherData(filterBy)
  };
  return !weather ? (
    <img className="loader" src={loader} alt="loading..." />
  ) : (
    <div className="weather-app">
      <div className="top">
        <div className="right flex column space-around align-center">
          <WeatherFilter onChangeFilter={onChangeFilter} />
          <TimeData />
        </div>
        <StyledTitle>{weather.data.title}</StyledTitle>
      </div>
      <WeatherList weather={weather} />
    </div>
  );
};
