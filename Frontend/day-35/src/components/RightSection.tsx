import React from "react";
import Contacts from "./contacts";
import RequestList from "./request";

const RightSection = () => {
  return (
    <div className="right-section">
      <RequestList />
      <Contacts />
    </div>
  );
};

export default RightSection;
