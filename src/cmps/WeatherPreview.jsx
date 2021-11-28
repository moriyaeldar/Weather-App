import { Link } from "react-router-dom";
import { WeatherData } from "./WeatherData";

export function WeatherPreview({ weather }) {
  return (
    <div className="weather-preview">
      <Link to={"/weather/" + weather.id}>
       <WeatherData weather={weather}></WeatherData>
      </Link>
      <section className="actions"></section>
    </div>
  );
}
