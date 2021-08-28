import React from "react";
import { motion } from "framer-motion";
import "../styles/navStyle.scss";
import { SearchIcon, PlusIcon } from "../assets/icons";
const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(131, 129, 255,0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(131, 129, 255,1)",
    transition: {
      delay: 1,
      duration: 2,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};
const Navigation = () => {
  return (
    <motion.div
      className="nav"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <div className="nav-logo">
        <motion.svg
          whileHover={{ scale: 1.1, rotate: -3 }}
          whileTap={{ rotate: 720 }}
          width="17"
          height="10"
          viewBox="0 0 17 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            d="M8.95312 0.697266C8.70703 1.54102 8.44727 2.33398 8.17383 3.07617C7.90039 3.81445 7.62891 4.49414 7.35938 5.11523C7.08984 5.73633 6.83203 6.29297 6.58594 6.78516C6.34375 7.27344 6.12695 7.68945 5.93555 8.0332C5.74805 8.37305 5.59766 8.63281 5.48438 8.8125C5.375 8.99219 5.31836 9.08203 5.31445 9.08203L4.07812 9.16992C3.59766 8.47852 3.12109 7.69922 2.64844 6.83203C2.44922 6.46484 2.24023 6.06055 2.02148 5.61914C1.80273 5.17773 1.58594 4.70508 1.37109 4.20117C1.16016 3.69336 0.953125 3.1582 0.75 2.5957C0.546875 2.0332 0.361328 1.44727 0.193359 0.837891L2.2207 0.421875C2.28711 1.01953 2.37695 1.58008 2.49023 2.10352C2.60742 2.62305 2.73828 3.11523 2.88281 3.58008C3.02734 4.04102 3.18359 4.47852 3.35156 4.89258C3.51953 5.30664 3.69141 5.70703 3.86719 6.09375C4.04297 6.47656 4.21875 6.85156 4.39453 7.21875C4.57031 7.58203 4.73828 7.94336 4.89844 8.30273C5.26172 7.61133 5.56836 6.91992 5.81836 6.22852C6.07227 5.53711 6.28711 4.85742 6.46289 4.18945C6.64258 3.52148 6.79102 2.87109 6.9082 2.23828C7.0293 1.60156 7.13477 0.996094 7.22461 0.421875L8.95312 0.697266Z"
            fill="#8381FF"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            d="M16.9863 0.5625L16.916 1.70508C16.7168 1.63477 16.4844 1.58008 16.2188 1.54102C15.957 1.49805 15.6875 1.46484 15.4102 1.44141C15.1328 1.41797 14.8613 1.40234 14.5957 1.39453C14.3301 1.38672 14.0918 1.38281 13.8809 1.38281H13.7227L14.0625 9.02344H12.2637L12.4746 1.44141C12.1855 1.46484 11.8887 1.49805 11.584 1.54102C11.2832 1.58008 10.9922 1.63086 10.7109 1.69336C10.4336 1.75195 10.1758 1.82227 9.9375 1.9043C9.69922 1.98633 9.50195 2.08008 9.3457 2.18555L9.23438 0.609375L16.9863 0.5625Z"
            fill="#8381ff"
          />
        </motion.svg>
      </div>
      <div className="nav-menu">
        <div className="search-box">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{
            scale: 0.9,
            background: "#8381ff",
          }}
        >
          <PlusIcon />
          <p>Create</p>
        </motion.button>
        <div className="profile">
          <span
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1513245543132-31f507417b26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;
