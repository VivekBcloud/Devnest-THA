import { motion } from "framer-motion";
import React from "react";
import "../styles/profileStyle.scss";
const Profile = () => {
  return (
    <motion.div
      className="side-profile-container"
      initial={{ x: -70, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <span
        className="profile"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513245543132-31f507417b26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></span>
      <div className="profile-data">
        <div className="profile-name">Meowthalot</div>
        <div className="profile-id">@Meowthalot</div>
      </div>
    </motion.div>
  );
};

export default Profile;
