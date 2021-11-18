import { Component, useCallback, useEffect, useState } from "react";
import { WeatherList } from "../cmps/WeatherList";
import { WeatherFilter } from "../cmps/WeatherFilter";
import { weatherService } from "../services/weatherService.js";
import loader from "../assets/imgs/loader.svg";

export const WeatherApp = () => {
  const [weather, setWether] = useState(undefined);
  const [filterBy, setFilter] = useState(undefined);

  useEffect(async () => {
    const weather = await weatherService.query(filterBy);
    setWether(weather);
  }, []);

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

          <ul className="clean-list">
            <li>
              <h5>time</h5>
              {weatherService.getData().time.substring(11, 16)}
            </li>
            <li>
              <h5>sunrise</h5>
              {weatherService.getData().sun_rise.substring(11, 16)}
            </li>
            <li>
              <h5>sunset</h5>
              {weatherService.getData().sun_set.substring(11, 16)}
            </li>
          </ul>
        </div>
        <h1>{weather.data.title}</h1>
      </div>

      <WeatherList weather={weather} />
    </div>
  );
};
