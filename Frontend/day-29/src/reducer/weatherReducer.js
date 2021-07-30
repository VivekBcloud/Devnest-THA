import { locationData, searchLocation } from "../actions/actionName";
export const placeNameReducer = (state = "", action) => {
  switch (action.type) {
    case searchLocation:
      return action.payload;
    default:
      return state;
  }
};

export const locationWeatherReducer = (state = [], action) => {
  switch (action.type) {
    case locationData:
      return action.payload;
    default:
      return state;
  }
};
