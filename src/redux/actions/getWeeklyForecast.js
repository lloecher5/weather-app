import * as types from "../actionTypes";

//action creator that fetches data from API for the weekly forecast of cities
export const getWeeklyForecast = (lat, lon) => (dispatch) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=da0612606736a1382680ac43b4415b51`
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
      type: types.GET_WEEKLY_FORECAST,
      //returns the data from the api in a key called search results
      searchResults: data,
    };
  }
};
