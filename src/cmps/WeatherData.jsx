import { weatherService } from "../services/weatherService";
import weatherImg from "../assets/imgs/weather.png";
import styled from "styled-components";

const StyledTitle = styled.h2`
  color: rgb(57, 118, 230);
  font-size:15px;
`;
export const WeatherData = ({ weather }) => {
  const getArrow = () => {
    return weatherService.getWeatherArrow(weather);
  };
  return (
    <>
        <div className="weather-details text-center">
        <StyledTitle>{weather.applicable_date}</StyledTitle>
          <div className="img-container">
            <img
              className={weather.weather_state_name}
              src={weatherImg}
              alt=""
            />
          </div>
          <div> {weather.weather_state_name}</div>
          <div data-trans="max">max : {weather.max_temp.toFixed()}°C</div>
          <div data-trans="min">min : {weather.min_temp.toFixed()}°C</div>
          {getArrow()}
          {weather.wind_speed.toFixed()}mph
          <h5 data-trans="humidity">humidity:</h5>
          {weather.humidity}
          <h5 data-trans="visibility">visibility:</h5>
          {weather.visibility.toFixed()}
          <h5 data-trans="pressure">pressure:</h5>
          {weather.air_pressure}mb
          <h5 data-trans="confidence">confidence:</h5>
          {weather.predictability}
        </div>
    </>
  );
};
