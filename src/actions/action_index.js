import axios from 'axios';
import config from '../config';

const API_KEY = config.API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; //good practice to use a variable that holds the action type to prevent accidental editing of type

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  console.log('Requests:', request);

  return {
    type: FETCH_WEATHER,
    payload : request
  };
}
