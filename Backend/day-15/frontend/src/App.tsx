import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  const [logInMode, setLogInMode] = useState(true);
  const selectorVariant = {
    login: {
      y: 2,
    },
    signup: {
      y: "105%",
    },
  };
  const selectorTextVariant = {
    login: {
      opacity: 0.2,
    },
    signup: {
      opacity: 1,
    },
  };
  return (
    <div className="App">
      <div className="option-bar">
        <div>
          <motion.div
            variants={selectorTextVariant}
            animate={!logInMode ? "login" : "signup"}
          >
            Login
          </motion.div>
          <motion.div
            variants={selectorTextVariant}
            animate={logInMode ? "login" : "signup"}
          >
            SignUp
          </motion.div>
        </div>
        <motion.div
          className="option-container"
          onClick={() => setLogInMode(!logInMode)}
        >
          <motion.div
            variants={selectorVariant}
            animate={logInMode ? "login" : "signup"}
            initial={{
              x: 3,
            }}
            className="option-selector"
          ></motion.div>
        </motion.div>
      </div>
      <div className="form-field">{logInMode ? <Login /> : <Signup />}</div>
    </div>
  );
}

export default App;
