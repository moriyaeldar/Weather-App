import { Link } from "react-router-dom";
import { WeatherImg } from "./WeatherImg";
import { WeatherData } from "./WeatherData";

export function WeatherPreview({ weather }) {
  return (
    <div className="weather-preview">
      <Link to={"/weather/" + weather.id}>
        <WeatherImg weather={weather} />
        <WeatherData weather={weather}></WeatherData>
      </Link>
    </div>
  );
}
