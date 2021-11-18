import { Link } from "react-router-dom";
import { NiceBtn } from "../cmps/NiceBtn";
import weatherImg from "../assets/imgs/weather.png";
export function WeatherPreview({ weather }) {
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
  return (
    <div className="weather-preview">
      <Link to={"/weather/" + weather.id}>
        <p className="date">{weather.applicable_date}</p>
        <div className="img-container">
          <img className={weather.weather_state_name} src={weatherImg} alt="" />
        </div>
        <div>
          {" "}
          <p>{weather.weather_state_name}</p>
        </div>
        <p>max:{weather.max_temp.toFixed()}°C</p>
        <p>min:{weather.min_temp.toFixed()}°C</p>
        <p>
          {getArrow()}
          {weather.wind_speed.toFixed()}mph
        </p>
        <h5>humidity:</h5>
        <p>{weather.humidity}</p>
        <h5>visibility:</h5>
        <p>{weather.visibility.toFixed()}</p>
        <h5>pressure:</h5>
        <p>{weather.air_pressure}mb</p>
        <h5>confidence:</h5>
        <p>{weather.predictability}</p>
      </Link>
      <section className="actions"></section>
    </div>
  );
}
