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

//variant
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const SideMenu = () => {
  return (
    <motion.div
      className="side-menu-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={item}
        className="side-menu"
        style={{ borderRadius: "1rem 0 0 0" }}
      >
        <div className="menu-option">
          <HomeIcon />
          <p>Home</p>
        </div>
      </motion.div>
      <motion.div variants={item} className="side-menu">
        <div className="menu-option">
          <PeopleIcon />
          <p>People</p>
        </div>
      </motion.div>
      <motion.div variants={item} className="side-menu">
        <div className="menu-option">
          <PhotosIcon />
          <p>Photos</p>
        </div>
      </motion.div>
      <motion.div variants={item} className="side-menu">
        <div className="menu-option">
          <NewsIcon />
          <p>New's Feed</p>
        </div>
      </motion.div>
      <motion.div variants={item} className="side-menu">
        <div className="menu-option">
          <ProfileIcon />
          <p>Profile</p>
        </div>
      </motion.div>
      <motion.div
        variants={item}
        className="side-menu"
        style={{ borderRadius: " 0 0 0 1rem" }}
      >
        <div className="menu-option" style={{ border: "none" }}>
          <SettingIcon />
          <p>Settings</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideMenu;
