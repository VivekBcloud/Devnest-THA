import { combineReducers } from "redux";
import { placeNameReducer, locationWeatherReducer } from "./weatherReducer";
const rootReducer = combineReducers({
  placeName: placeNameReducer,
  placeData: locationWeatherReducer,
});

export default rootReducer;
