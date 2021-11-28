import { useEffect, useState } from "react";
import { WeatherList } from "../cmps/WeatherList";
import { WeatherFilter } from "../cmps/WeatherFilter";
import { weatherService } from "../services/weatherService.js";
import styled from "styled-components";
import loader from "../assets/imgs/loader.svg";
const listStyled = styled.ul`
margin: 0;
padding: 0;
list-style-type: none;

& > li {
    margin: 0;
    padding: 0;
}
`;
export const WeatherApp = () => {
  const [weather, setWether] = useState(undefined);
  const [filterBy] = useState(undefined);
  useEffect(() => {
    (async () => {
      const weather = await weatherService.query(filterBy);
      setWether(weather);
    })();
  }, [filterBy]);

  const onChangeFilter = async (filterBy) => {
    const weather = await weatherService.query(filterBy);
    setWether(weather);
  };
  return !weather ? (
    <img className="loader" src={loader} alt="loading..." />
  ) : (
    <div className="weather-app">
      <div className="top">
        <div className="right flex column space-around align-center">
          <WeatherFilter onChangeFilter={onChangeFilter} />

          <listStyled>
            <li>
              <h5 data-trans="time">time</h5>
              {weatherService.getData().time.substring(11, 16)}
            </li>
            <li>
              <h5 data-trans="sunrise">sunrise</h5>
              {weatherService.getData().sun_rise.substring(11, 16)}
            </li>
            <li>
              <h5 data-trans="sunset">sunset</h5>
              {weatherService.getData().sun_set.substring(11, 16)}
            </li>
          </listStyled>
        </div>
        <h1>{weather.data.title}</h1>
      </div>

      <WeatherList weather={weather} />
    </div>
  );
};
