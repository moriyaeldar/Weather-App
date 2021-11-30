import weatherImg from "../assets/imgs/weather.png";

export const WeatherImg=({weather})=>{
    return(
        <div className="img-container">
        <img className={weather.weather_state_name} src={weatherImg} alt="" />
      </div>
    )
}