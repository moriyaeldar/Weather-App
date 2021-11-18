import { loadOptions } from "@babel/core";
import axios from "axios";
import storageService from "./storage.service";
export const weatherService = {
  query,
  getById,
  getCountry,
  getSources,
  getData
};
const key = "WEATHER";
const dataKey = "DATA";
async function query(filterBy) {
  const cityId = !filterBy ? "2459115" : filterBy;
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

