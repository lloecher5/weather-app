//imports all the action types as types
import * as types from "../actionTypes";

//action creator that fetches data from API for the current weather of cities
export const getCurrentWeather = (cityInput) => (dispatch) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=da0612606736a1382680ac43b4415b51`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //dispatch sends the data to the reducer
      dispatch(fetchSuccess(true, data));
    });
};

const fetchSuccess = (isSuccess, data) => {
  if (isSuccess) {
    return {
      //returns the correct action type
      type: types.GET_CURRENT_WEATHER,
      //returns the data from the api in a key called search results
      searchResults: data,
    };
  }
};
