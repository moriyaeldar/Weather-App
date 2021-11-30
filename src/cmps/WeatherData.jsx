import { weatherService } from "../services/weatherService";
import styled from "styled-components";
const StyledTitle = styled.h2`
  color: rgb(57, 118, 230);
  font-size: 15px;
`;
const StyledSubTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
`;
export const WeatherData = ({ weather }) => {
  const getArrow = () => {
    return weatherService.getWeatherArrow(weather);
  };
  const {
    weather_state_name,
    max_temp,
    min_temp,
    wind_speed,
    humidity,
    visibility,
    air_pressure,
    predictability,
    applicable_date,
  } = weather;
  const weatherInfo = [
    weather_state_name,
    "max:" + max_temp.toFixed() + "°C",
    "min" + min_temp.toFixed() + "°C",
    `${getArrow()}${wind_speed.toFixed()}mph`,
    "humidity",
    humidity,
    "visibility",
    visibility.toFixed(),
    "pressure",
    air_pressure,
    "confidence",
    predictability,
  ];
  return (
    <>
      <StyledTitle>{applicable_date}</StyledTitle>
      {weatherInfo.map((info) =>
        info === "humidity" ||
        info === "visibility" ||
        info === "pressure" ||
        info === "confidence" ? (
          <StyledSubTitle>
            <div data-trans={info}>{info}</div>
          </StyledSubTitle>
        ) : (
          <div>{info}</div>
        )
      )}
    </>
  );
};
