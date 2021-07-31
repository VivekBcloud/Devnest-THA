import React from "react";
import "./styles/search.scss";
import { useSelector, useDispatch } from "react-redux";
import { findPlace, getLocationData, changeLoading } from "../actions/action";
const Search = () => {
  const placeName = useSelector((state) => state.placeName);
  const dispatch = useDispatch();
  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      dispatch(getLocationData(placeName));
      dispatch(findPlace(""));
      dispatch(changeLoading(true));
    }
  };
  return (
    <div className="search-box">
      <input
        type="text"
        id="input-place-name"
        value={placeName}
        placeholder="city name"
        onChange={(e) => {
          dispatch(findPlace(e.target.value));
        }}
        onKeyDown={handleEnterKey}
      />
      <button
        type="submit"
        onClick={() => {
          dispatch(getLocationData(placeName));
          dispatch(findPlace(""));
          dispatch(changeLoading(true));
        }}
      >
        Find
      </button>
    </div>
  );
};
export default Search;
