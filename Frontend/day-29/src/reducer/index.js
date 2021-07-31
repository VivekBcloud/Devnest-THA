import { combineReducers } from "redux";
import {
  placeNameReducer,
  locationWeatherReducer,
  loadingStatus,
} from "./weatherReducer";
const rootReducer = combineReducers({
  placeName: placeNameReducer,
  placeData: locationWeatherReducer,
  loading: loadingStatus,
});

export default rootReducer;
