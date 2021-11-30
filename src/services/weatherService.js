import axios from "axios";
import storageService from "./storage.service";
export const weatherService = {
  query,
  getById,
  getCountry,
  getSources,
  getData,
getWeatherArrow
};
const key = "WEATHER";
const dataKey = "DATA";
async function query(filterBy) {
  const cityId = filterBy;
  let weather = await axios.get(
    `https://www.metaweather.com/api/location/${cityId}/`
  );
  storageService.saveToStorage(key, weather.data.consolidated_weather);
  storageService.saveToStorage(dataKey, weather.data);
  return weather;
}

function getById(id) {
  const weathers = storageService.loadFromStorage(key);
  const weather = weathers.find((weather) => weather.id == id);
  return weather;
}

function getCountry() {
  const data = storageService.loadFromStorage(dataKey);
  return data.title;
}
function getSources() {
  const data = storageService.loadFromStorage(dataKey);
  return data.sources;
}
function getData() {
  const data = storageService.loadFromStorage(dataKey);
  return data;
}

function getWeatherArrow(weather) {
  const arrows = [
    { name: "SSE", value: "↘" },
    { name: "ESE", value: "↘" },
    { name: "ES", value: "↘" },
    { name: "SE", value: "↘" },
    { name: "ENE", value: "↗" },
    { name: "EN", value: "↗" },
    { name: "NE", value: "↗" },
    { name: "NNE", value: "↗" },
    { name: "WN", value: "↖" },
    { name: "WNW", value: "↖" },
    { name: "NW", value: "↖" },
    { name: "NNW", value: "↖" },
    { name: "SSW", value: "↙" },
    { name: "SW", value: "↙" },
    { name: "WSW", value: "↙" },
    { name: "WS", value: "↙" },
    { name: "W", value: "←" },
    { name: "S", value: "↓" },
    { name: "N", value: "↑" },
    { name: "E", value: "→" },
  ];
  const arrow = arrows.filter((arr) =>
    arr.name === weather.wind_direction_compass 
  );
  return arrow[0].value;
};

