import { Component, useEffect, useState } from "react";
import { weatherService } from "../services/weatherService";
import loader from "../assets/imgs/loader.svg";
import weatherImg from "../assets/imgs/weather.png";

export const WeatherDetails = ({ history, match }) => {
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    loadweather();
  }, [match.params.id]);

  const goBack = () => {
    history.push("/");
  };
  const getArrow = () => {
    const arrows = [
      { name: "SSE", value: "↘" },
      { name: "ESE", value: "↘" },
      { name: "ENE", value: "↗" },
      { name: "WNW", value: "↖" },
      { name: "SSW", value: "↙" },
      { name: "WSW", value: "↙" },
      { name: "W", value: "←" },
      { name: "S", value: "↓" },
      { name: "N", value: "↑" },
      { name: "E", value: "→" },
    ];
    const arrow = arrows.map((arr) =>
      arr.name === weather.wind_direction_compass ? arr.value : ""
    );
    return arrow;
  };
  const loadweather = async () => {
    const { id } = match.params;
    console.log(id);
    const weather = weatherService.getById(id);
    setWeather(weather);
    console.log(weather);
  };

  return !weather ? (
    <img className="loader" src={loader} alt="" />
  ) : (
    <>
      <span className="arrow" onClick={goBack}>←</span>
      <h2>{weatherService.getCountry()}</h2>
      <div className="flex space-around">
        <div className="weather-details text-center">
          <p className="date">{weather.applicable_date}</p>
          <div className="img-container">
            <img
              className={weather.weather_state_name}
              src={weatherImg}
              alt=""
            />
          </div>
          <div>
            {" "}
            <p>{weather.weather_state_name}</p>
          </div>
          <p ><span data-trans="max">max</span> :{weather.max_temp.toFixed()}°C</p>
        <p ><span data-trans="min">min</span> :{weather.min_temp.toFixed()}°C</p>
          <p>
            {getArrow()}
            {weather.wind_speed.toFixed()}mph
          </p>
          <h5 data-trans="humidity">humidity:</h5>
          <p>{weather.humidity}</p>
          <h5 data-trans="visibility">visibility:</h5>
          <p>{weather.visibility.toFixed()}</p>
          <h5 data-trans="pressure">pressure:</h5>
          <p>{weather.air_pressure}mb</p>
          <h5 data-trans="confidence">confidence:</h5>
          <p>{weather.predictability}</p>
        </div>
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
