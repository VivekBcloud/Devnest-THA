import React from "react";
import Profile from "./profile";
import SideMenu from "./sideMenu";

const LeftSection = () => {
  return (
    <div className="left-section">
      <Profile />
      <SideMenu />
    </div>
  );
};

export default LeftSection;
