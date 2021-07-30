import { searchLocation, locationData } from "./actionName";
const findPlace = (input) => {
  return {
    type: searchLocation,
    payload: input,
  };
};

const getLocationData = (data) => {
  return (dispatch) => {
    fetch(data.payload)
      .then((response) => response.json())
      .then((res) => {
        return dispatch({
          type: locationData,
          payload: res,
        });
      });
  };
};

export { findPlace, getLocationData };
