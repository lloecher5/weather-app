import { GET_CURRENT_WEATHER } from "../actionTypes";

//sets the initial state to an object with a results key that is made up of an empty array.
const initialState = {
  results: [],
};

//reducer used to handle the getCurrentWeather action creator
function searchResultsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_WEATHER: {
      return {
        //if the execute search action is hit, update the state to become an array with the data from weather API
        results: [action.searchResults],
      };
    }

    //if the action is not hit, return the default state which is an object with an empty results array.
    default:
      return state;
  }
}

export default searchResultsReducer;
