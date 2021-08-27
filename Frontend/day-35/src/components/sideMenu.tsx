import { motion } from "framer-motion";
import React from "react";
import {
  HomeIcon,
  PeopleIcon,
  PhotosIcon,
  NewsIcon,
  ProfileIcon,
  SettingIcon,
} from "../assets/icons";

import "../styles//sideMenuStyle.scss";
const SideMenu = () => {
  return (
    <motion.div
      className="side-menu-container"
      initial={{ x: -140, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.6, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <div className="side-menu" style={{ borderRadius: "1rem 0 0 0" }}>
        <div className="menu-option">
          <HomeIcon />
          <p>Home</p>
        </div>
      </div>
      <div className="side-menu">
        <div className="menu-option">
          <PeopleIcon />
          <p>People</p>
        </div>
      </div>
      <div className="side-menu">
        <div className="menu-option">
          <PhotosIcon />
          <p>Photos</p>
        </div>
      </div>
      <div className="side-menu">
        <div className="menu-option">
          <NewsIcon />
          <p>New's Feed</p>
        </div>
      </div>
      <div className="side-menu">
        <div className="menu-option">
          <ProfileIcon />
          <p>Profile</p>
        </div>
      </div>
      <div className="side-menu" style={{ borderRadius: " 0 0 0 1rem" }}>
        <div className="menu-option" style={{ border: "none" }}>
          <SettingIcon />
          <p>Settings</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SideMenu;
