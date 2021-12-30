import currentWeather from "./getCurrentWeather";
import weeklyForecast from "./getWeeklyForecast";
import { combineReducers } from "redux";
export default combineReducers({ currentWeather, weeklyForecast });
