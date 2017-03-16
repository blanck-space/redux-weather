import axios from 'axios';
const API_KEY = '1f20e917536f2f7c495685f9e9f73841';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const GET_WEATHER = 'FETCH_WEATHER';

export default function getWeather(cityName){
  let reqUrl = `${ROOT_URL}&q=${cityName},us&units=metric`;
  let request = axios.get(reqUrl);
  return{
    type: GET_WEATHER,
    payload: request
  }
}
