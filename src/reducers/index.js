import { combineReducers } from 'redux';
import WeatherReducer from './weather_data'
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
